import { ADD_ISSUE } from './types';

export const addIssue = issue => dispatch => {
  dispatch({ type: ADD_ISSUE, payload: issue });
};
