import { ADD_SURVEY, DELETE_SURVEY, GET_SURVEYS } from './types';
import axios from 'axios';

export const addSurvey = survey => dispatch => {
  axios.post('/api/survey/', survey).then(res => {
    dispatch({ type: ADD_SURVEY, payload: survey });
  });
};

export const getSurveys = () => dispatch => {
  axios.get('/api/survey/').then(surveys => {
    console.log(surveys);
    dispatch({ type: GET_SURVEYS, payload: surveys.data });
  });
};
export const deleteSurvey = survey => dispatch => {
  axios.delete('/api/survey/' + survey._id).then(res => {
    dispatch({ type: DELETE_SURVEY, payload: survey });
  });
};
