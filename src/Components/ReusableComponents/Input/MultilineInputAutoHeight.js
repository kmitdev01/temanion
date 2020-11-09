import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TextInput, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './TextInputStyle';
import {constants} from '../../helpers';

const MultilineInputAutoHeight = (props) => {
  const [editing, setEditing] = useState(false);

  return (
    <>
      {props.title && (
        <View style={styles.title}>
          <Text style={styles.titletext}>{props.title}</Text>
        </View>
      )}
      <View
        style={[
          styles.queueItemDiffContainer,
          {height: props.showErrorField ? 210 : 200},
        ]}>
        <View
          style={[
            styles.inputChildMultilineHeight,
            editing && {borderColor: constants.appThemeSecondaryColor},
            props.showErrorField && {borderColor: '#f63774'},
          ]}>
          <TextInput
            style={[
              props.inputStyles,
              props.showErrorField
                ? styles.errorInputMultilineHeight
                : styles.inputMultilineHeight,
            ]}
            underlineColorAndroid="transparent"
            secureTextEntry={props.isSecureText}
            value={props.value}
            returnKeyType={props.returnKeyType}
            selectionColor={constants.textColor}
            autoCapitalize={props.autoCapitalize}
            autoCorrect={false}
            multiline={true}
            onChangeText={(text) => {
              props.onChangeText(text);
            }}
            onSubmit={() => props.onSubmit()}
            onFocus={() => setEditing(true)}
            maxLength={props.maxLength}
            autoFocus={props.autoFocus}
            keyboardType={props.keyboardType}
            disabled={props.disabled}
            editable={props.editable}
            placeholder={props.placeholder}
            onEndEditing={() => setEditing(false)}
          />
        </View>

        {props.showErrorField && (
          <Text style={[styles.errorText, props.tab]}>{props.errorText}</Text>
        )}
      </View>
    </>
  );
};
export default MultilineInputAutoHeight;

// Define typechecking
MultilineInputAutoHeight.propTypes = {
  renderLeft: PropTypes.func,
  title: PropTypes.string,
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string,
  editable: PropTypes.bool,
  disabled: PropTypes.bool,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.string,
  showErrorField: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  isSecureText: PropTypes.bool,
  value: PropTypes.string,
  //custom style
  inputStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node, // plain text
  onChangeText: PropTypes.func,
};

MultilineInputAutoHeight.defaultProps = {
  renderLeft: () => {},
  title: null,
  returnKeyType: 'next',
  placeholder: '',
  editable: true,
  disabled: false,
  multiline: true,
  keyboardType: 'default',
  maxLength: null,
  showErrorField: false,
  onChangeText: () => {},
  autoCapitalize: 'none',
  value: '',
  isSecureText: false,
  inputStyles: {},
  style: {},
  children: '',
};
