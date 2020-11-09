import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base';

const CommonFloatRoundButton = ({firstButtonClick, firstButtonText}) => (
  <TouchableOpacity
    onPress={() => firstButtonClick('addAppointment')}
    style={styles.emptyButtonbg}>
    <LinearGradient
      style={styles.emptyButton}
      colors={['#11c1ff', '#078dff']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Image
        source={require('../../assets/plus.png')}
        style={styles.emptyIcon}
      />
    </LinearGradient>
  </TouchableOpacity>
);

export default CommonFloatRoundButton;
