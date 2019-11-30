import { ADD_PROJECT, DELETE_PROJECT } from './types';

export const addProject = project => dispatch => {
  dispatch({ type: ADD_PROJECT, payload: project });
};

export const deleteProject = project => dispatch => {
  dispatch({ type: DELETE_PROJECT, payload: project });
};
