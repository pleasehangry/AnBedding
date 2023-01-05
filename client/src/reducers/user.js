import * as actionType from "../constants/userConstants";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.START_LOADING:
      return { ...state, loading: true };
    case actionType.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case actionType.USER_DELETE_SUCCESS:
      return { ...state, loading: false, succes: true };
    case actionType.USER_LIST_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case actionType.USER_DETAILS_FAIL:
    case actionType.USER_LIST_FAIL:
    case actionType.USER_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
