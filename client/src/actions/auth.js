import { AUTH } from "../constants/productConstants";
import * as api from "../api/index";

export const login = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.error(error);
  }
};

export const logout = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.logout(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.error(error);
  }
};
