import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import audioReducer from './audioReducer';
import themeReducer from './themeReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  time: timeReducer,
  audio: audioReducer,
  theme: themeReducer,
  error: errorReducer,
});
