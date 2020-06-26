import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { BoxShadow } from 'react-native-shadow';
import { addTime } from '../../actions';
import { constructTimeAction } from './timerLogic';
import { PRIMARY_COLOR } from '../../styles/vars';
import { shadowButton } from '../../styles/styles';

const TimeCard = (props) => {
  const dispatch = useDispatch();

  return (
    <BoxShadow setting={{ ...shadowButton, width: 250, height: 40 }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => dispatch(addTime(constructTimeAction(props)))}
      >
        <Text style={styles.text}>{`${props.time} ${props.unit}`}</Text>
      </TouchableOpacity>
    </BoxShadow>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 7,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default TimeCard;
