import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

import UserModal from "../models/user.js";

// REGISTER

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await CryptoJS.AES.encrypt(password).toString();

    const newUser = new UserModal.create({
      email,
      password: hashedPassword,
      username: username,
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({ newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

// Login

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    const hashedPassword = CryptoJS.AES.decrypt(oldUser.password);
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== password) {
      res.status(401).json("Wrong password!");
    }

    const token = jwt.sign(
      {
        id: oldUser._id,
        isAdmin: oldUser.isAdmin,
      },
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: oldUser, token });

    const isPasswordCorrect = await CryptoJS.AES;
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
