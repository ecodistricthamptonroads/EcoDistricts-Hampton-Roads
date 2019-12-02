import { ADD_JOB, DELETE_JOB, GET_JOBS, UPDATE_JOB } from "./types";
import axios from 'axios';

export const addJob = job => dispatch => {
  axios.post('/api/job/', job).then(res => {
    alert('Successfully Added Job');
    dispatch({ type: ADD_JOB, payload: job });
  });
};

export const getJobs = () => dispatch => {
  axios.get('/api/job/').then(jobs => {
    console.log(jobs);
    dispatch({ type: GET_JOBS, payload: jobs.data });
  });
};
export const updateJob = job => dispatch => {
  axios.put('/api/job/', job).then(jobs => {
    console.log(jobs);
    dispatch({ type: UPDATE_JOB, payload: jobs.data });
  });
};
export const deleteJob = job => dispatch => {
  axios.delete('/api/job/' + job._id).then(res => {
    dispatch({ type: DELETE_JOB, payload: job });
  });
};
