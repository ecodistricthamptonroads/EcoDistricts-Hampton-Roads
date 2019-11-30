import { ADD_ISSUE, DELETE_ISSUE } from './types';

export const addIssue = issue => dispatch => {
  dispatch({ type: ADD_ISSUE, payload: issue });
};

export const deleteIssue = issue => dispatch => {
  dispatch({ type: DELETE_ISSUE, payload: issue });
};
