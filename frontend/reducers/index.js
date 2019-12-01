import { combineReducers } from 'redux';
import issueReducer from './issueReducer';
import loginReducer from './loginReducer';
import newsReducer from './newsReducer';
import surveyReducer from './surveyReducer';
import projectReducer from './projectReducer';
import jobReducer from './jobReducer';
import emailReducer from './emailReducer';

//this has to be at the bottom cause code dependency reasons
export default combineReducers({
  issues: issueReducer,
  login: loginReducer,
  news: newsReducer,
  surveys: surveyReducer,
  project: projectReducer,
  job: jobReducer,
  email: emailReducer
});
