import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS } from '../actions/types';

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
          project => project.title !== action.payload.title
        )
      };
    case GET_PROJECTS:
      return { ...state, projects: [...action.payload] };
    default:
      return state;
  }
}
