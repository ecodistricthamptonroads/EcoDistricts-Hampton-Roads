import { ADD_SURVEY, DELETE_SURVEY, GET_SURVEYS } from '../actions/types';

const surveyInitial = {
  surveys: []
};

export default function(state = surveyInitial, action) {
  switch (action.type) {
    case ADD_SURVEY:
      return { ...state, surveys: [...state.surveys, action.payload] };
    case DELETE_SURVEY:
      return {
        ...state,
        surveys: state.surveys.filter(
          survey => survey.title !== action.payload.title
        )
      };
    case GET_SURVEYS:
      return { ...state, surveys: [...action.payload] };
    default:
      return state;
  }
}
