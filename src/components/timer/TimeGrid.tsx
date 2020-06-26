import React from 'react';
import { View, StyleSheet } from 'react-native';
import TimeCard from './TimeCard';

class TimeGrid extends React.Component {
  render() {
    return (
      <View style={stlyes.grid}>
        <TimeCard time={30} unit="m" />
        <TimeCard time={10} unit="m" />
        <TimeCard time={5} unit="m" />
        <TimeCard time={2} unit="m" />
        <TimeCard time={30} unit="s" />
        <TimeCard time={10} unit="s" />
      </View>
    );
  }
}

const stlyes = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default TimeGrid;
