import { ADD_SURVEY, DELETE_SURVEY } from '../actions/types';

const surveyInitial = {
  survey: []
};

export default function(state = surveyInitial, action) {
  switch (action.type) {
    case ADD_SURVEY:
      return { ...state, survey: [action.payload, ...state.survey] };
    case DELETE_SURVEY:
      return {
        ...state,
        survey: state.survey.filter(
          survey => survey.name !== action.payload.name
        )
      };
    default:
      return state;
  }
}
