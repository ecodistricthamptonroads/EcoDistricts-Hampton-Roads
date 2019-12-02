import { ADD_ISSUE, DELETE_ISSUE, GET_ISSUES, UPDATE_ISSUE } from "./types";
import axios from 'axios';

export const addIssue = issue => dispatch => {
  axios.post('/api/issue/', issue).then(res => {
    dispatch({ type: ADD_ISSUE, payload: issue });
    alert('Successfully Added Issue');
    axios.get('/api/issue/').then(issues => {
      console.log(issues);
      dispatch({ type: GET_ISSUES, payload: issues.data });
    });
  });
};

export const getIssues = () => dispatch => {
  axios.get('/api/issue/').then(issues => {
    console.log(issues);
    dispatch({ type: GET_ISSUES, payload: issues.data });
  });
};
export const updateIssue = issue => dispatch => {
  axios.put('/api/issue/', issue).then(issues => {
    console.log(issues);
    dispatch({ type: UPDATE_ISSUE, payload: issues.data });
  });
};
export const deleteIssue = issue => dispatch => {
  axios.delete('/api/issue/' + issue._id).then(res => {
    dispatch({ type: DELETE_ISSUE, payload: issue });
  });
};
