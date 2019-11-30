import { combineReducers } from 'redux';
import issueReducer from './issueReducer';
import loginReducer from './loginReducer';
import newReducer from './newsReducer';
import surveyReducer from './surveyReducer';

//this has to be at the bottom cause code dependency reasons
export default combineReducers({
  issue: issueReducer,
  login: loginReducer,
  news: newReducer,
  survey: surveyReducer
});
