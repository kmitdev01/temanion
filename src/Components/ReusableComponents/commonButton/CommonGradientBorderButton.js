import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';

const buttonStyle = props => props.buttonStyle;
const buttonTitleStyle = props => props.buttonTitleStyle;
const buttonTitle = props => props.title;
const mainView = props => props.mainView;
const CommonGradientBorderButton = props => (
  <TouchableOpacity
    onPress={() => props.onPressButton()}
    style={styles.onlyFlex}>
    <LinearGradient
      colors={['#11c1ff', '#078dff']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={buttonStyle(props) || styles.buttonStyle}>
      <View style={mainView(props) || styles.mainView} />

      <Text
        style={
          [styles.buttonText, {position: 'absolute', alignSelf: 'center'}] ||
          buttonTitleStyle(props)
        }>
        {buttonTitle(props)}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default CommonGradientBorderButton;
