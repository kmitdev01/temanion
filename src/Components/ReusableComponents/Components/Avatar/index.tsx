import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../../Theme';

const Avatar = () => {
  const theme = useTheme<Theme>();
  return (
    <View
      style={{
        height: theme.layout.s,
        width: theme.layout.s,
        borderRadius: theme.layout.xs,
        backgroundColor: theme.colors.secondary,
        position: 'absolute',
        top: -theme.layout.xs,
      }}></View>
  );
};

const styles = StyleSheet.create({});

export default Avatar;
