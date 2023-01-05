import { combineReducers } from "redux";

import productReducer from "./product";
import authReducer from "./auth";
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
} from "./order";
import { userReducer } from "./user";
import { cartReducer } from "./cart";

export const reducers = combineReducers({
  productReducer,
  authReducer,
  userReducer,
  cartReducer,
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
});
