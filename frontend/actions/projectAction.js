import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, UPDATE_PROJECT } from './types';
import axios from 'axios';

export const addProject = project => dispatch => {
  axios.post('/api/project/', project).then(res => {
    alert('Successfully Added Project');
    dispatch({ type: ADD_PROJECT, payload: project });
    axios.get('/api/project/').then(projects => {
      console.log(projects);
      dispatch({ type: GET_PROJECTS, payload: projects.data });
    });
  });
};

export const getProjects = () => dispatch => {
  axios.get('/api/project/').then(projects => {
    console.log(projects);
    dispatch({ type: GET_PROJECTS, payload: projects.data });
  });
};
export const updateProject = project => dispatch => {
  axios.put('/api/project/', project).then(projects => {
    console.log(projects);
    dispatch({ type: UPDATE_PROJECT, payload: projects.data });
  });
};
export const deleteProject = project => dispatch => {
  axios.delete('/api/project/' + project._id).then(res => {
    dispatch({ type: DELETE_PROJECT, payload: project });
  });
};
