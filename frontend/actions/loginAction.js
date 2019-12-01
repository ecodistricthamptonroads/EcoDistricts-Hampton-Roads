import { LOGIN, LOGOUT, FETCH_USER } from './types';
import axios from 'axios';

export const login = issue => dispatch => {
  dispatch({ type: LOGIN, payload: issue });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const fetchUser = () => dispatch => {
  axios.get('/api/auth/current_user').then(res => {
    console.log(res.data);
    dispatch({ type: FETCH_USER, payload: res.data });
  });
};
