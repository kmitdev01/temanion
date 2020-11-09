import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './ButtonStyle';

const CommonBackArrowButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.arrowButtonS}>
    <Image source={require('../../assets/arrow-back.png')} />
  </TouchableOpacity>
);

export default CommonBackArrowButton;
