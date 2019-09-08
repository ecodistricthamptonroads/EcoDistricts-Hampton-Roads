import { LOGIN, LOGOUT } from "./types";

export const login = issue => dispatch => {
  dispatch({ type: LOGIN, payload: issue });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
