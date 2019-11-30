import { ADD_SURVEY } from './types';
import axios from 'axios';

export const addSurvey = survey => dispatch => {
  axios.post('/api/survey/', survey).then(survey => {
    console.log(survey);
    //this.setState({ issues: issue })
    dispatch({ type: ADD_SURVEY, payload: survey });
  });
};
