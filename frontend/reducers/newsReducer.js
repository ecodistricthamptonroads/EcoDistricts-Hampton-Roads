import { ADD_ARTICLE, DELETE_ARTICLE, GET_ARTICLES } from '../actions/types';

const newsInitial = {
  news: []
};

export default function(state = newsInitial, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, news: [...state.news, action.payload] };
    case DELETE_ARTICLE:
      return {
        ...state,
        news: state.news.filter(news => news.title !== action.payload.title)
      };
    case GET_ARTICLES:
      return { ...state, news: [...action.payload] };
    default:
      return state;
  }
}
