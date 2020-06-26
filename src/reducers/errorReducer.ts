import { ERROR_CHANGE } from '../actions/types';
import { setError } from '../actions';

export default (state = '', action: { type: string; payload: string }) => (
  dispatch,
) => {
  switch (action.type) {
    case ERROR_CHANGE:
      setTimeout(() => dispatch(setError('')), 1000);
      return `${state} \n ${action.payload}`;
    default:
      return state;
  }
};
