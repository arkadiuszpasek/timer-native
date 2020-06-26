import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { renderTime } from './timerLogic';

class TimeDisplay extends Component {
  render() {
    const { time } = this.props;

    return <Text style={styles.timer}>{renderTime(time)}</Text>;
  }
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 42,
    color: 'white',
  },
});

const mapStateToProps = (state: any) => {
  return {
    time: state.time,
    audio: state.audio,
  };
};

export default connect(mapStateToProps, {})(TimeDisplay);
