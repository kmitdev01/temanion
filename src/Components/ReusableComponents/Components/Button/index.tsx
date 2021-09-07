import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Theme, Text} from '../../../Theme';
import {useTheme} from '@shopify/restyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonStyles from '../../../Theme/commonStyles';

const Button = ({text, onPress, loading}: any) => {
  const theme = useTheme<Theme>();
  return (
    <TouchableOpacity style={CommonStyles.secondaryButton}>
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text variant="dark14Uppercase">{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  main: {
    width: 340,
    borderWidth: 1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
