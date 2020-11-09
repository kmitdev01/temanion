import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import LinearGradient from 'react-native-linear-gradient';
import constants from '../../helpers/constants';

const EnhancedActionSheet = (props) => {
  const {
    visible,
    title,
    cancelBtnText,
    data,
    onCancelPress,
    titleContainerStyle,
    onRequestCloseCallback,
  } = props;

  const dataLength = data ? data.length : 0;
  const _styleTitle = () => {
    if (props.titleStyle) {
      return props.titleStyle;
    }
  };

  const _styleTitleContainer = () => {
    if (props.titleContainerStyle) {
      return props.titleContainerStyle;
    }
  };

  const _styleCancelText = () => {
    if (props.cancelTextStyle) {
      return props.cancelTextStyle;
    }
  };

  const _styleCancelContainer = () => {
    if (props.cancelContainerStyle) {
      return props.cancelContainerStyle;
    }
  };

  const _renderOption = (e, i, dataLength) => (
    <TouchableOpacity
      onPress={() => (props.onOptionPress ? props.onOptionPress(e) : {})}
      key={i}
      activeOpacity={1}
      style={[
        styles.labelContainer,
        _isLastOption(i, dataLength) ? styles.lastLabelContainer : null,
        _isSelected(e) ? [styles.lastLabelContainer, {}] : null,
        _styleOptionContainer(),
        _styleSelectedOptionContainer(e),
      ]}>
      <Text
        style={[
          styles.label,
          _isSelected(e) ? styles.selectedLabel : null,
          _styleOptionText(),
          _styleSelectedOptionText(e),
        ]}>
        {e.label}
      </Text>
    </TouchableOpacity>
  );

  const _styleOptionContainer = () => {
    if (props.optionContainerStyle) {
      return props.optionContainerStyle;
    }
  };

  const _styleOptionText = () => {
    if (props.optionTextStyle) {
      return props.optionTextStyle;
    }
  };

  const _styleSelectedOptionContainer = (e) => {
    if (props.selectedOptionContainerStyle && _isSelected(e)) {
      return props.selectedOptionContainerStyle;
    }
  };

  const _styleSelectedOptionText = (e) => {
    if (props.selectedOptionTextStyle && _isSelected(e)) {
      return props.selectedOptionTextStyle;
    }
  };

  const _isLastOption = (i, dataLength) => i === dataLength - 1;

  const _isSelected = (e) => {
    const {selected} = props;

    if (Array.isArray(selected)) {
      return selected.includes(e.id);
    }

    return selected === e.id && e.id !== undefined;
  };
  return (
    <Dialog
      dialogStyle={{
        backgroundColor: '#353949B3',
      }}
      visible={visible}
      rounded={false}
      hasOverlay={false}
      onTouchOutside={() => {
        onRequestCloseCallback();
      }}
      onHardwareBackPress={() => onRequestCloseCallback()}>
      <DialogContent>
        <View style={styles.backgroundLayer}>
          <View style={styles.container}>
            <View style={styles.actionsheetContainer}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14,
                }}>
                {data.map((e, i) => _renderOption(e, i, dataLength))}
              </ScrollView>
            </View>
            <TouchableOpacity onPress={onCancelPress} activeOpacity={1}>
              <LinearGradient
                colors={['#11c1ff', '#078dff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[[styles.cancelContainer], _styleCancelContainer()]}>
                <Text style={[styles.cancel, _styleCancelText()]}>
                  {cancelBtnText ? cancelBtnText : 'Cancel'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </DialogContent>
    </Dialog>
  );
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundLayer: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: SCREEN_WIDTH - 50,
    marginBottom: 15,
  },
  actionsheetContainer: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: 'hidden',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,

    marginBottom: 10,
    backgroundColor: '#fff',
    maxHeight: (SCREEN_HEIGHT / 3) * 2,
  },
  titleContainer: {
    backgroundColor: '#fff',
    opacity: 0.9,
    alignItems: 'center',

    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  title: {
    fontFamily: constants.AppSemiBoldFont,
    fontSize: 14,
    color: '#7007ff',
  },
  labelContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderColor: '#D1D6F3',
  },
  lastLabelContainer: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  selectedLabelContainer: {
    paddingVertical: 30,
  },
  label: {
    fontFamily: constants.AppSemiBoldFont,
    fontSize: 14,
    color: '#7007ff',
  },
  selectedLabel: {
    fontFamily: constants.AppSemiBoldFont,
    fontSize: 14,
    color: '#11c1ff',
  },
  cancelContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  cancel: {
    fontFamily: constants.AppSemiBoldFont,
    fontSize: 14,

    color: 'white',
  },
});
export default EnhancedActionSheet;
