import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTime } from '../../actions';
import { constructTimeAction } from './timerLogic';
import { primaryColor } from '../../styles/vars';

const TimeCard = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(addTime(constructTimeAction(props)))}
    >
      <Text style={styles.container}>{`${props.time} ${props.unit}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 7,
    color: 'white',
    backgroundColor: primaryColor,
  },
});

export default TimeCard;
