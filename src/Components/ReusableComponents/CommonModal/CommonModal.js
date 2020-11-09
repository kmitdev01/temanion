import Dialog, {DialogTitle} from 'react-native-popup-dialog';
import CommonGradientBorderButton from '../commonButton/CommonGradientBorderButton';
import CommonGradientButton from '../commonButton/Button';
import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import styles from './style';

const CommonModal = (props) => {
  const {dismissInstructions} = props;
  return (
    <Dialog
      footer={null}
      visible={props.visible}
      overlayBackgroundColor="#353949B3">
      <View style={styles.onlyWidth}>
        <View style={styles.addTitle}>
          <Text style={styles.addTitleText}>{props.title}</Text>
        </View>

        <View style={styles.RemoveDoc}>
          <Text style={styles.removeStaffStyle}>{props.subTitle}</Text>
        </View>
      </View>
      <View style={styles.lastRowStyles}>
        <CommonGradientBorderButton
          onPressButton={props.toggleLeftButton}
          title={props.leftButtonTitle}
          mainView={styles.mainView}
          buttonStyle={styles.buttonStyleBorder}
        />
        <CommonGradientButton
          onPressButton={props.toggleRightButton}
          title={props.rightButtonTitle}
          buttonStyle={styles.buttonStyleGradient}
        />
      </View>
    </Dialog>
  );
};

export default CommonModal;

// Define typechecking
CommonModal.propTypes = {
  // renderLeft: PropTypes.func,
  // title: PropTypes.string,
  // returnKeyType: PropTypes.string,
  // placeholder: PropTypes.string,
  // editable: PropTypes.bool,
  // disabled: PropTypes.bool,
  // keyboardType: PropTypes.string,
  // maxLength: PropTypes.string,
  // showErrorField: PropTypes.bool,
  // autoCapitalize: PropTypes.string,
  // isSecureText: PropTypes.bool,
  // value: PropTypes.string,
  // //custom style
  // inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // children: PropTypes.node, // plain text
  // onChangeText: PropTypes.func,
};

CommonModal.defaultProps = {
  // renderLeft: () => {},
  // title: null,
  // returnKeyType: 'next',
  // placeholder: '',
  // editable: true,
  // disabled: false,
  // keyboardType: 'default',
  // maxLength: null,
  // showErrorField: false,
  // onChangeText: () => {},
  // autoCapitalize: 'none',
  // value: '',
  // isSecureText: false,
  // inputStyles: {},
  // style: {},
  // children: '',
};
