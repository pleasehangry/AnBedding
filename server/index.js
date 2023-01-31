import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import http from "http";
import { Server } from "socket.io";

import connect from "./models/connectDB.js";
import productRoutes from "./routes/product.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";

import {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} from "./controllers/LiveChat.js";

const app = express();
const server = http.createServer(app);
dotenv.config();
const PORT = process.env.PORT || 5000;
const io = new Server(server, {
  /* options */
});

//middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/product", productRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

io.on("connect", (socket) => {
  console.log("User Connected");
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
