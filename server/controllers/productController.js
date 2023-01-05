import { Router } from "express";
import ProductModal from "../models/product.js";

export const create = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = async (req, res) => {
  try {
    const updatedProduct = await ProductModal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const remove = async (req, res) => {
  try {
    await ProductModal.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json.error;
  }
};

export const getAllProduct = async (req, res) => {
  const qNew = req.query.new;
  const qTag = req.query.tag;

  try {
    let products;

    if (qNew) {
      products = await ProductModal.find().sort({ createAt: -1 }).limit(1);
    } else if (qTag) {
      products = await ProductModal.find({
        tags: {
          $in: [qTag],
        },
      });
    } else {
      products = await ProductModal.find();
    }
  } catch (error) {}
};

export const getProduct = async (req, res) => {
  try {
    const product = await ProductModal.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};
