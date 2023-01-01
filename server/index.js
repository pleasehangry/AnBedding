import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connect from "./models/connectDB";

const app = express();
dotenv.config();
PORT = 3000;

//middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
