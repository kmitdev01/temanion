import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';

const CommonFloatButton = ({firstButtonClick, firstButtonText}) => (
  <View style={styles.buttonContainer}>
    <LinearGradient
      style={styles.buttonInternalContainer}
      colors={['#11c1ff', '#078dff']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <TouchableOpacity onPress={() => firstButtonClick('addAppointment')}>
        <Text style={styles.buttonTextStyle}>{firstButtonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  </View>
);

export default CommonFloatButton;
