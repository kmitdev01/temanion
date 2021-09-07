import {createText} from '@shopify/restyle';
import React from 'react';
import SpinnerButton from 'react-native-spinner-button';
import {Dimensions, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Text = createText();
const {width} = Dimensions.get('window');

const Button = ({label, buttonStyle, ...props}) => {
  const {loading} = useSelector((state) => ({
    ...state.auth.user,
  }));

  return (
    <SpinnerButton
      spinnerColor={'white'}
      buttonStyle={[
        {
          backgroundColor: 'cyan',
        },
        buttonStyle ? buttonStyle : styles.button,
      ]}
      spinnerType="MaterialIndicator"
      isLoading={loading}
      {...props}
      indicatorCount={1}>
      <Text variant="white16Medium">{label}</Text>
    </SpinnerButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: width,
    height: 41.75,
    marginHorizontal: 20,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
