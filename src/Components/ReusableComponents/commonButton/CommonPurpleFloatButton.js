import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';

const CommonPurpleFloatButton = ({onClick, buttonTitle}) => (
  <View style={styles.buttonContainerFloat}>
    <LinearGradient
      style={styles.buttonFloatInternalContainer}
      colors={['#A911FF', '#7007FF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <TouchableOpacity onPress={() => onClick()}>
        <Text style={styles.buttonFloatTextStyle}>{buttonTitle}</Text>
      </TouchableOpacity>
    </LinearGradient>
  </View>
);

export default CommonPurpleFloatButton;
