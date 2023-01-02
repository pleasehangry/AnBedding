import {
  FETCH_ALL_PRODUCT,
  FETCH_PRODUCT,
  CRECREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/productConstants";

const productReducer = (state = { isLoading: true, products: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload.data,
        currentPage: action.payload.currentPage,
        numberofPages: action.payload.numberofPages,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload.data,
        currentPage: action.payload.currentPage,
        numberofPages: action.payload.numberofPages,
      };
    case CRECREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
