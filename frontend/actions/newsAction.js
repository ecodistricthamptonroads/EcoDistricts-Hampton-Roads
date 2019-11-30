import { ADD_ARTICLE, GET_ARTICLE } from './types';
import axios from 'axios';

export const addArticle = article => dispatch => {
  axios.post('/api/news/', article).then(news => {
    console.log(news);
    //this.setState({ issues: issue })
    dispatch({ type: ADD_ARTICLE, payload: article });
  });
};
