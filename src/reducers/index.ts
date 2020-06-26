import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import audioReducer from './audioReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  time: timeReducer,
  audio: audioReducer,
  theme: themeReducer,
});
