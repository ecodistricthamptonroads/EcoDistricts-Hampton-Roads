import { ADD_JOB, DELETE_JOB } from './types';

export const addJob = job => dispatch => {
  dispatch({ type: ADD_JOB, payload: job });
};

export const deleteJob = job => dispatch => {
  dispatch({ type: DELETE_JOB, payload: job });
};
