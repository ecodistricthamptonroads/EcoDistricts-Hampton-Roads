import { FETCH_USER, LOGIN, LOGOUT } from '../actions/types';

const loginInitial = {
  user: false,
  loggedIn: false
};

export default function(state = loginInitial, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload.username, loggedIn: true };
    case LOGOUT:
      return { ...state, user: null, loggedIn: false };
    case FETCH_USER:
      return { ...state, user: action.payload || false };
    default:
      return state;
  }
}
