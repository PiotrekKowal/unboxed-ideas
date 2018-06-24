import { combineReducers } from 'redux';
import app from 'reducers/app';
import people from 'reducers/people';
import triz from 'reducers/triz/triz';

export default combineReducers({
  app,
  people,
  triz,
});
