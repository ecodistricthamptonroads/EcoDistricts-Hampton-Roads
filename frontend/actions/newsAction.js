import { ADD_ARTICLE, DELETE_ARTICLE } from './types';
import axios from 'axios';

export const addArticle = article => dispatch => {
  axios.post('/api/news/', article).then(news => {
    console.log(news);
    //this.setState({ issues: issue })
    dispatch({ type: ADD_ARTICLE, payload: article });
  });
};

export const deleteArticle = article => dispatch => {
  dispatch({ type: DELETE_ARTICLE, payload: article });
};
