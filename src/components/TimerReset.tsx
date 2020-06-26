import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetTime } from '../actions/index';
import { neutralGray } from '../styles/vars';
import { shadowButton } from '../styles/buttons';

const TimeReset = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(resetTime())}>
      <Text style={[styles.container, shadowButton]}>Reset Timer</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 7,
    color: 'white',
    backgroundColor: neutralGray,
    fontSize: 30,
  },
});

export default TimeReset;
