import { ADD_SURVEY } from '../actions/types';

const surveyInitial = {
  survey: []
};

export default function(state = surveyInitial, action) {
  switch (action.type) {
    case ADD_SURVEY:
      action.payload.id = id++;
      return { ...state, survey: [action.payload, ...state.survey] };
    default:
      return state;
  }
}
