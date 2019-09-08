import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';

export function configureStore() {
  return createStore(reducers, applyMiddleware(reduxThunk));
}
