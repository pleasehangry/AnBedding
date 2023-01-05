import * as api from "../api/index";
import * as actionType from "../constants/userConstants";

export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.START_LOADING,
    });

    const { data } = await api.fetchUser(id);

    dispatch({
      type: actionType.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: actionType.USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const updateUserProfile = (id, user) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.START_LOADING,
    });

    const { data } = await api.updateUser(id, user);

    dispatch({
      type: actionType.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: actionType.USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: actionType.START_LOADING,
    });

    const { data } = await api.fetchUsers();

    dispatch({
      type: actionType.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: actionType.USER_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.START_LOADING,
    });

    await api.deleteUser(id);

    dispatch({ type: actionType.USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: actionType.USER_DELETE_FAIL,
      payload: message,
    });
  }
};
