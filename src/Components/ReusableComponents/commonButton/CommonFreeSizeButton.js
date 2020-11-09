import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './ButtonStyle';
import LinearGradient from 'react-native-linear-gradient';

const buttonStyle = props => props.buttonStyle;
const buttonTitleStyle = props => props.buttonTitleStyle;
const buttonTitle = props => props.title;

const CommonFreeSizeButton = props => {
  return (
    <LinearGradient
      colors={props.disable ? ['#d1d6f3', '#d1d6f3'] : ['#11c1ff', '#078dff']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={buttonStyle(props) || styles.buttonStyle}>
      <TouchableOpacity
        onPress={() => props.onPressButton()}
        style={{alignItems: 'center'}}
        disabled={props.disable}>
        <Text style={styles.buttonTextStyle || buttonTitleStyle(props)}>
          {buttonTitle(props)}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CommonFreeSizeButton;
