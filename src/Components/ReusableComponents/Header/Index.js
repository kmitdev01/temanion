import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StatusBar, Image } from 'react-native';

import { Text, Typography } from '../index';
import PropTypes from 'prop-types';
const backIcon = require('../../../assets/Back/Back.png');
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BaseColor } from '../Typography/Index';

const Index = (props) => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();
  const {
    style,
    styleLeft,
    styleCenter,
    styleRight,
    styleRightSecond,
    title,
    onPressLeft,
    onPressRight,
    onPressRightSecond,
    showBackButton,
    isBoldName,
  } = props;
  return (
    <View
      style={{
        paddingTop: insets.bottom,
        height: insets.bottom === 0 ? 70 : 100,
        justifyContent: 'center',
        backgroundColor: BaseColor.bgColor
      }}>
      {onPressLeft() ? (
        onPressLeft()
      ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack(null);
            }}>
            <Image source={backIcon} style={{ marginLeft: 25 }} />
          </TouchableOpacity>
        )}
    </View>
  );
};
export default Index;

Index.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styleRightSecond: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  renderRightSecond: PropTypes.func,
  onPressRightSecond: PropTypes.func,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  showBackButton: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  barStyle: PropTypes.string,
};

Index.defaultProps = {
  style: {},
  styleLeft: {},
  styleCenter: {},
  styleRight: {},
  styleRightSecond: {},
  renderLeft: () => { },
  renderRight: () => { },
  renderRightSecond: () => { },
  onPressLeft: () => { },
  onPressRight: () => { },
  onPressRightSecond: () => { },
  title: 'Title',
  subTitle: '',
  showBackButton: false,
  barStyle: 'dark-content',
};
