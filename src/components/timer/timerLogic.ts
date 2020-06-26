/* eslint-disable import/prefer-default-export */
import { TimeObject } from '../../actions/types';

export const renderTime = (time: TimeObject) => {
  const { hours, minutes, seconds } = time;
  let hourS = hours.toString();
  let minS = minutes.toString();
  let secS = seconds.toString();
  if (hours < 10) hourS = `0${hourS}`;
  if (minutes < 10) minS = `0${minS}`;
  if (seconds < 10) secS = `0${secS}`;

  return `${hourS}:${minS}:${secS}`;
};

export const constructTimeAction = (props: { time: number; unit: string }) => {
  const { time, unit } = props;
  const timeState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  switch (unit) {
    case 'h':
      timeState.hours = time;
      break;
    case 'm':
      timeState.minutes = time;
      break;
    case 's':
      timeState.seconds = time;
      break;
    default:
      break;
  }

  return timeState;
};
