import { Audio } from 'expo-av';
import { SOUND_CHANGE } from '../actions/types';

const dingSound = require('../../assets/sounds/ding.mp3');
const w3Sound = require('../../assets/sounds/w3.mp3');

export const SOUNDS = {
  ding: {
    fullName: 'Gentle Bell',
    sound: dingSound,
  },
  w3: {
    fullName: 'Witcher 3 Quest Sound',
    sound: w3Sound,
  },
};

const constructAudioObject = (
  name: string,
): {
  name: string;
  sound: Audio.Sound;
  fullName: string;
} => {
  const sound = new Audio.Sound();
  try {
    sound.loadAsync(SOUNDS[name].sound);
  } catch (err) {
    console.log('Error loading sound', err);
  }
  return {
    name,
    sound,
    fullName: SOUNDS[name].fullName,
  };
};

const INITIAL_AUDIO = constructAudioObject('ding');
export default (
  state = INITIAL_AUDIO,
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case SOUND_CHANGE:
      return constructAudioObject(action.payload);
    default:
      return state;
  }
};
