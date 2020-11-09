import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import authConstants from '../../Redux/AuthConstants';
import { BaseColor, Typography, Text } from '../ReusableComponents';
import { removeAuthToken } from '../Helpers/utils';
const { width } = Dimensions.get('window');
export default (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => {
        dispatch({
          type: authConstants.RESET_STATE,
          user: 'data',
        });
      }}>
        <Text title="Logout" />
      </TouchableOpacity>
    </View >
  );
};
