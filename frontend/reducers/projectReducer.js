import { ADD_PROJECT } from '../actions/types';

const projectInitial = {
  project: []
};

export default function(state = projectInitial, action) {
  switch (action.type) {
    case ADD_PROJECT:
      action.payload.id = id++;
      return { ...state, project: [action.payload, ...state.project] };
    default:
      return state;
  }
}
