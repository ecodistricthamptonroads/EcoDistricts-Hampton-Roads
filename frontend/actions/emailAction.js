import { ADD_EMAIL, DELETE_EMAIL, GET_EMAILS, CHECK_EMAIL } from './types';
import axios from 'axios';

export const addEmail = email => dispatch => {
  axios.post('/api/email/', email).then(res => {
    dispatch({ type: ADD_EMAIL, payload: email });
    alert('Successfully Added Email');
  });
};

export const checkEmail = email => dispatch => {
  axios.post('/api/email/' + email).then(res => {
    alert(res.data);
    dispatch({ type: CHECK_EMAIL, payload: email });
  });
};

export const getEmails = () => dispatch => {
  axios.get('/api/email/').then(emails => {
    dispatch({ type: GET_EMAILS, payload: emails.data });
  });
};
export const deleteEmail = email => dispatch => {
  axios.delete('/api/email/' + email._id).then(res => {
    dispatch({ type: DELETE_EMAIL, payload: email });
  });
};
