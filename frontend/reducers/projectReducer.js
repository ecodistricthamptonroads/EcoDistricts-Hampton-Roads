import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, UPDATE_PROJECT } from '../actions/types';

const projectInitial = {
  projects: []
};

export default function(state = projectInitial, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project._id !== action.payload._id
        )
      };
    case GET_PROJECTS:
      return { ...state, projects: [...action.payload] };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects.filter(
          project => project._id !== action.payload._id
        ), action.payload]
      };
    default:
      return state;
  }
}
