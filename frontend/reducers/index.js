import { combineReducers } from 'redux';
import issueReducer from './issueReducer';
import loginReducer from './loginReducer';
import newsReducer from './newsReducer';
import surveyReducer from './surveyReducer';
import projectReducer from './projectReducer';
import jobReducer from './jobReducer';

//this has to be at the bottom cause code dependency reasons
export default combineReducers({
  issue: issueReducer,
  login: loginReducer,
  news: newsReducer,
  survey: surveyReducer,
  project: projectReducer,
  job: jobReducer
});
