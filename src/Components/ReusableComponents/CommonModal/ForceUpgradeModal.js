import Dialog from 'react-native-popup-dialog';
import CommonGradientButton from '../commonButton/Button';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const ForceUpgradeModal = (props) => {
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
        <CommonGradientButton
          onPressButton={props.toggleRightButton}
          title={props.rightButtonTitle}
          buttonStyle={styles.buttonStyleGradient}
        />
      </View>
    </Dialog>
  );
};

export default ForceUpgradeModal;
