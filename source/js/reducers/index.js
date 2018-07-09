import { combineReducers } from 'redux';
import app from 'reducers/app';
import contradictions from 'reducers/contradictions';
import examples from 'reducers/examples';
import triz from 'reducers/triz/triz';

export default combineReducers({
  app,
  contradictions,
  examples,
  triz,
});
