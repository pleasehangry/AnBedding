import * as actionType from "../constants/productConstants";
import * as api from "../api/index";

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.START_LOADING });

    const { data } = await api.fetchProduct(id);

    dispatch({ type: actionType.FETCH_PRODUCT, payload: { product: data } });
    dispatch({ type: actionType.END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = (page) => async (dispatch) => {
  try {
    dispatch({ type: actionType.START_LOADING });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchProducts(page);

    dispatch({
      type: actionType.FETCH_ALL_PRODUCT,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: actionType.END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = (product, history) => async (dispatch) => {
  try {
    dispatch({ type: actionType.START_LOADING });
    const { data } = await api.createProduct(product);

    dispatch({ type: actionType.CREATE_PRODUCT, payload: data });
    history.push(`/product/${data._id}`);
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, product);

    dispatch({ type: actionType.UPDATE_PRODUCT, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);

    dispatch({ type: actionType.DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.error(error);
  }
};
