import { combineReducers } from "redux";

import productReducer from "./product";
import authReducer from "./auth";

export const reducers = combineReducers({ productReducer, authReducer });
