import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { Audio } from 'expo-av';
import TimeDisplay from './TimeDisplay';
import { DARK_GRAY } from '../../styles/vars';
import TimeGrid from './TimeGrid';
import TimeReset from '../TimerReset';
import { timeTick, setError } from '../../actions';

const SOUNDS = {
  ding: require('../../../assets/sounds/ding.mp3'),
  w3: require('../../../assets/sounds/w3.mp3'),
};

class Timer extends React.Component {
  componentDidMount() {
    const { timeTick } = this.props;
    this.interval = setInterval(() => timeTick(), 1000);
  }

  componentDidUpdate(prevProps) {
    const { time } = this.props;

    // Don't play sound if time hasn't changed, but update was called
    if (
      prevProps.time.hours === time.hours &&
      prevProps.time.minutes === time.minutes &&
      prevProps.time.seconds === time.seconds
    )
      return;

    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      this.handlePlaySound();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handlePlaySound = async () => {
    const {
      audio: { name },
      setError,
    } = this.props;
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(SOUNDS[name]);
      await sound
        .playAsync()
        .then((playbackStatus) => {
          setTimeout(() => {
            sound.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((err) => {
          setError(err.message);
        });
    } catch (err) {
      setError(err.message);
    }
  };

  renderError = () => {
    const { error } = this.props;
    return error ? <Text style={styles.error}>{error}</Text> : null;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <TimeDisplay />
          <TimeGrid />
          <TimeReset />
        </View>
        {this.renderError()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: DARK_GRAY,
  },
  error: {
    position: 'absolute',
    opacity: 0.75,
    top: 25,
    left: 25,
    right: 25,
    paddingVertical: 10,
    backgroundColor: 'red',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
});

const mapStateToProps = (state) => ({
  time: state.time,
  audio: state.audio,
  error: state.error,
});

export default connect(mapStateToProps, { timeTick, setError })(Timer);
