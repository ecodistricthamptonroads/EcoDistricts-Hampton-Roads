import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import DevTools from '../components/Root/DevTools';
import reduxThunk from 'redux-thunk';

export function configureStore() {
  return createStore(
    reducers,
    compose(applyMiddleware(reduxThunk), DevTools.instrument())
  );
}
