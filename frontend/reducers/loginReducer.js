import { LOGIN, LOGOUT } from '../actions/types';

const loginInitial = {
  username: null,
  loggedIn: false
};

export default function(state = loginInitial, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, username: action.payload, loggedIn: true };
    case LOGOUT:
      return { ...state, username: null, loggedIn: false };
    default:
      return state;
  }
}
