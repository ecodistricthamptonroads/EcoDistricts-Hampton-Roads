import { ADD_ISSUE } from '../actions/types';

const formInitial = {
  issues: []
};

export default function(state = formInitial, action) {
  switch (action.type) {
    case ADD_ISSUE:
      return { ...state, issues: [...state.issues, action.payload] };
    default:
      return state;
  }
}
