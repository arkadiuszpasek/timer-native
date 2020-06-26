import { ERROR_CHANGE } from '../actions/types';

export default (state = '', action: { type: string; payload: string }) => {
  switch (action.type) {
    case ERROR_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
