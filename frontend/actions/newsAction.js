import { ADD_ARTICLE, GET_ARTICLE } from './types';

export const addArticle = article => dispatch => {
  dispatch({ type: ADD_ARTICLE, payload: article });
};
