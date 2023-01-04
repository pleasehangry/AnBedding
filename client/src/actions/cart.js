import * as ActionType from "../constants/cartConstants";
import { fetchProduct } from "../api/index";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { product } = await fetchProduct(id);

  dispatch({
    type: ActionType.CART_ADD_ITEM,
    payload: {
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      inStock: product.instock,
      color: product.color,
      size: product.size,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: ActionType.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: ActionType.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: ActionType.CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
