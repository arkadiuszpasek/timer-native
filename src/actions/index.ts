/* eslint-disable import/prefer-default-export */
import * as types from './types';

export const addTime = (timeObject: types.TimeObject) => ({
  type: types.ADD_TIME,
  payload: timeObject,
});

export const resetTime = () => ({
  type: types.RESET_TIME,
});

export const timeTick = () => ({
  type: types.TIME_TICK,
});

export const changeSound = (soundName: string) => ({
  type: types.SOUND_CHANGE,
  payload: soundName,
});

export const toggleTheme = () => ({
  type: types.THEME_TOGGLE,
});

export const setTheme = (theme: string) => ({
  type: types.THEME_CHANGE,
  payload: theme,
});

export const setError = (error: string) => ({
  type: types.ERROR_CHANGE,
  payload: error,
});
