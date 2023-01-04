import { CART_CLEAR_ITEMS } from "../constants/cartConstants";
import * as ActionType from "../constants/orderConstants";
import * as api from "../api/index";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ActionType.ORDER_CREATE_REQUEST,
    });

    const { data } = await api.createOrder(order);

    dispatch({
      type: ActionType.ORDER_CREATE_SUCCESS,
      payload: data,
    });

    // warning, if you want to buy only the product you check in the cart, it not works corrently!
    localStorage.removeItem("cartItems");
  } catch (error) {
    const msg =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ActionType.ORDER_CREATE_FAIL,
      payload: msg,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ActionType.ORDER_DELIVER_REQUEST,
    });

    const { data } = await api.getOrderDetails(id);

    dispatch({
      type: ActionType.ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ActionType.ORDER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ActionType.ORDER_PAY_REQUEST,
      });

      const { data } = await api.updateOrderToPaid(orderId);

      dispatch({
        type: ActionType.ORDER_PAY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ActionType.ORDER_PAY_FAIL,
        payload: message,
      });
    }
  };

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ActionType.ORDER_DELIVER_REQUEST,
    });

    const { data } = await api.updateOrderToDelivered(order._id);

    dispatch({
      type: ActionType.ORDER_DELIVER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ActionType.ORDER_DELIVER_FAIL,
      payload: message,
    });
  }
};

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ActionType.ORDER_LIST_MY_REQUEST,
    });

    const { data } = await api.fetchUserOrders();

    dispatch({
      type: ActionType.ORDER_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ActionType.ORDER_LIST_MY_FAIL,
      payload: message,
    });
  }
};

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ActionType.ORDER_LIST_REQUEST,
    });

    const { data } = await api.fetchAllOrder();
    dispatch({
      type: ActionType.ORDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ActionType.ORDER_LIST_FAIL,
      payload: message,
    });
  }
};
