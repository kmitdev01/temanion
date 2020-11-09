import React from 'react';
import {Text} from 'native-base';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const LoadingIndicator = (props) => {
  const {loading, loadingText} = props;
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.textStyle}>{loadingText}</Text>
      </View>
    );
  }
  return null;
};

export default LoadingIndicator;
