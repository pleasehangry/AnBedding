import CartModal from "../models/cart";

export const addToCart = async (req, res) => {
  const newCart = new CartModal(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCart = async (req, res) => {
  try {
    const updatedCart = await CartModal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(err);
  }
};

export const removeCart = async (req, res) => {
  try {
    await CartModal.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await CartModal.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllCart = async (req, res) => {
  try {
    const carts = await CartModal.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};
