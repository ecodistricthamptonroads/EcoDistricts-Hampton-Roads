import { ADD_PROJECT, DELETE_PROJECT } from '../actions/types';

const projectInitial = {
  projects: []
};

export default function(state = projectInitial, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return { ...state, projects: [action.payload, ...state.projects] };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.issues.filter(
          issue => issue.title !== action.payload.title
        )
      };
    default:
      return state;
  }
}
