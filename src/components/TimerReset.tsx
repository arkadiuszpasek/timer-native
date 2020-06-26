import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { BoxShadow } from 'react-native-shadow';
import { resetTime } from '../actions/index';
import { NEUTRAL_GRAY } from '../styles/vars';
import { shadowButton } from '../styles/styles';

const TimeReset = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.top}>
      <BoxShadow setting={{ ...shadowButton, height: 60, width: 300 }}>
        <TouchableOpacity
          onPress={() => dispatch(resetTime())}
          style={styles.container}
        >
          <Text style={[styles.text]}>Reset Timer</Text>
        </TouchableOpacity>
      </BoxShadow>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    marginBottom: 30,
  },
  container: {
    borderRadius: 7,
    width: 300,
    height: 60,
    backgroundColor: NEUTRAL_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default TimeReset;
