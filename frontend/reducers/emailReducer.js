import { ADD_EMAIL, DELETE_EMAIL, GET_EMAILS } from '../actions/types';

const emailInitial = {
  emails: []
};

export default function(state = emailInitial, action) {
  switch (action.type) {
    case ADD_EMAIL:
      return { ...state, emails: [...state.emails, action.payload] };
    case DELETE_EMAIL:
      return {
        ...state,
        emails: state.emails.filter(
          email => email.title !== action.payload.title
        )
      };
    case GET_EMAILS:
      return { ...state, emails: [...action.payload] };
    default:
      return state;
  }
}
