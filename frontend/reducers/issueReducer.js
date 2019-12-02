import { ADD_ISSUE, DELETE_ISSUE, GET_ISSUES, UPDATE_ISSUE } from "../actions/types";

const issueInitial = {
  issues: []
};

export default function(state = issueInitial, action) {
  switch (action.type) {
    case ADD_ISSUE:
      return { ...state, issues: [...state.issues, action.payload] };
    case DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter(issue => issue._id !== action.payload._id)
      };
    case UPDATE_ISSUE:
      return {
        ...state,
        issues: [...state.issues.filter(
          issue => issue._id !== action.payload._id
        ), action.payload]
      };
    case GET_ISSUES:
      return { ...state, issues: [...action.payload] };
    default:
      return state;
  }
}
