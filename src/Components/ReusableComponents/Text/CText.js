import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {
  TypographyText,
  FontWeight,
  BaseColor,
  Typography,
} from '../Typography/Index';

const CText = (props) => {
  const {
    //props style

    //----------default-----------//
    numberOfLines,
    style,
    title,
    //-----------default-end---------//
  } = props;
  return (
    <Text
      style={StyleSheet.flatten([
        style && style,
      ])}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export default CText;

// Define typechecking
CText.propTypes = {
  //define style

  //numberOfLines
  numberOfLines: PropTypes.number,
  //custom style
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string, // plain text
};

CText.defaultProps = {
  //props for style

  //numberOfLines
  numberOfLines: 10,
  //custom style
  style: {},
  title: '',
};
