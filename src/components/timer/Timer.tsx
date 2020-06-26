import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import TimeDisplay from './TimeDisplay';
import { darkGray, primaryColor } from '../../styles/vars';
import TimeGrid from './TimeGrid';
import TimeReset from '../TimerReset';

class Timer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TimeDisplay />
        <TimeGrid />
        <TimeReset />
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
    backgroundColor: darkGray,
  },
});

export default connect()(Timer);
