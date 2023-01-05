import CryptoJS from "crypto-js";

import UserModal from "../models/user.js";

export const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(req.body.password).toString();
  }
  try {
    const updatedUser = await UserModal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await UserModal.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModal.findById(req.params.id);
  } catch (error) {
    res.status(500).json(err);
  }
};

export const getAllUser = async (req, res) => {
  const newQuery = req.query.new;
  try {
    const users = newQuery
      ? await UserModal.find().sort({ _id: -1 }).limit(5)
      : await UserModal.find();
  } catch (error) {
    res.status(500).json(err);
  }
};

//GET USER STATS

export const getStatsUser = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
