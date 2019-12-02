import { ADD_ARTICLE, DELETE_ARTICLE, GET_ARTICLES } from './types';
import axios from 'axios';

export const addArticle = article => dispatch => {
  axios.post('/api/news/', article).then(res => {
    dispatch({ type: ADD_ARTICLE, payload: article });
    alert('Successfully Added Article');
  });
  axios.get('/api/news/').then(articles => {
    console.log(articles);
    dispatch({ type: GET_ARTICLES, payload: articles.data });
  });
};

export const getArticles = () => dispatch => {
  axios.get('/api/news/').then(articles => {
    console.log(articles);
    dispatch({ type: GET_ARTICLES, payload: articles.data });
  });
};
export const deleteArticle = article => dispatch => {
  axios.delete('/api/news/' + article._id).then(res => {
    dispatch({ type: DELETE_ARTICLE, payload: article });
  });
};
