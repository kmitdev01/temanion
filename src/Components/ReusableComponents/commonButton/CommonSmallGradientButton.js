import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '../../ReusableComponents';

const buttonStyle = (props) => props.buttonStyle;
const buttonTitleStyle = (props) => props.buttonTitleStyle;
const buttonTitle = (props) => props.title;
const buttonTitleStyleSelected = (props) => props.buttonTitleStyleSelected;

const CommonSmallGradientButton = (props) => (
  <LinearGradient
    colors={!props.selected ? ['#ffffff', '#ffffff'] : ['#11c1ff', '#078dff']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={buttonStyle(props) || styles.buttonStyleHeight}>
    <TouchableOpacity
      onPress={() => props.onPressButton()}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        buttonBlueTitle
        style={
          props.selected
            ? buttonTitleStyleSelected(props) || styles.buttonTextStyle
            : buttonTitleStyle(props) || styles.buttonTextStyleDefault
        }>
        {buttonTitle(props)}
      </Text>
    </TouchableOpacity>
  </LinearGradient>
  // </TouchableOpacity>
);

export default CommonSmallGradientButton;
