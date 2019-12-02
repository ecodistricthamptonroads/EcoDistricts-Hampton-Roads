import { ADD_SURVEY, DELETE_SURVEY, GET_SURVEYS } from '../actions/types';

const surveyInitial = {
  surveys: []
};
let id = 0;
export default function(state = surveyInitial, action) {
  switch (action.type) {
    case ADD_SURVEY:
      action.payload.id = id++;
      return { ...state, surveys: [...state.surveys, action.payload] };
    case DELETE_SURVEY:
      return {
        ...state,
        surveys: state.surveys.filter(
          survey => survey._id !== action.payload._id
        )
      };
    case GET_SURVEYS:
      return { ...state, surveys: [...action.payload] };
    default:
      return state;
  }
}
