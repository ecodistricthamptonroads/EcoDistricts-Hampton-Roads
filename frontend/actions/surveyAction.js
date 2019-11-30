import { ADD_SURVEY, DELETE_SURVEY } from './types';
import axios from 'axios';

export const addSurvey = survey => dispatch => {
  axios.post('/api/survey/', survey).then(survey => {
    console.log(survey);
    //this.setState({ issues: issue })
    dispatch({ type: ADD_SURVEY, payload: survey });
  });
};

export const deleteSurvey = survey => dispatch => {
  dispatch({ type: DELETE_SURVEY, payload: survey });
};
