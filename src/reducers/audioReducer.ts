import { SOUND_CHANGE } from '../actions/types';

export const SOUNDS = {
  ding: {
    fullName: 'Gentle Bell',
  },
  w3: {
    fullName: 'Witcher 3 Quest Sound',
  },
};

const constructAudioObject = (
  name: string,
): {
  name: string;
  fullName: string;
} => {
  return {
    name,
    fullName: SOUNDS[name].fullName,
  };
};

export default (
  state = constructAudioObject('w3'),
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case SOUND_CHANGE:
      return constructAudioObject(action.payload);
    default:
      return state;
  }
};
