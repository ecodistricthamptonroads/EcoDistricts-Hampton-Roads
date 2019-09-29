import { combineReducers } from 'redux';
import formReducer from './formReducer';
import loginReducer from './loginReducer';
import newReducer from './newsReducer';

//this has to be at the bottom cause code dependency reasons
export default combineReducers({
  form: formReducer,
  login: loginReducer,
  news: newReducer
});
