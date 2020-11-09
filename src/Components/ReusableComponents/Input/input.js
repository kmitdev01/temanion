import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, TouchableOpacity, Image } from 'react-native';
import { Text } from '../../ReusableComponents';
const Input = (props) => {
  const { title, error, errorText, showErrorField } = props;
  const [editing, setEditing] = useState(false);

  return (
    <>
      <View
        style={[
          {
            height: 39.48,
            borderRadius: 39.48 / 2,
            borderWidth: 1,
            borderColor: '#979DA36B',
            justifyContent: 'center',
          },
          props.styles,
        ]}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            borderRadius: 10,
            top: -7,
            left: 25,
          }}>
          <Text green85ExtraBold title={`${title}`} />
        </View>
        {props.renderLeft() ? (
          <View
            style={[
              {
                left: 25,
                position: 'absolute',
                alignSelf: 'center',
              },
              { ...props.leftStyle },
            ]}>
            {props.renderLeft()}
          </View>
        ) : null}

        <TextInput
          style={[
            {
              paddingLeft: props.renderLeft()
                ? props.paddingLeft
                  ? props.paddingLeft
                  : 50
                : 25,
              paddingRight: props.renderRight()
                ? props.paddingRight
                  ? props.paddingRight
                  : 50
                : 25,
            },
            //props.showErrorField ? styles.errorInputMultiline : styles.input,
          ]}
          secureTextEntry={props.isSecureText}
          value={props.value}
          returnKeyType={props.returnKeyType}
          //selectionColor={constants.textColor}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={false}
          onChangeText={(text) => {
            props.onChangeText(text);
          }}
          onFocus={() => setEditing(true)}
          maxLength={props.maxLength}
          autoFocus={props.autoFocus}
          keyboardType={props.keyboardType}
          disabled={props.disabled}
          editable={props.editable}
          placeholder={props.placeholder}
          onEndEditing={() => setEditing(false)}
        />
        {props.renderRight() ? (
          <View
            style={[
              {
                right: 50,
                position: 'absolute',
                alignSelf: 'center',
              },
              { ...props.rightStyle },
            ]}>
            {props.renderRight()}
          </View>
        ) : null}
      </View>
    </>
  );
};
export default Input;

// Define typechecking
Input.propTypes = {
  error: PropTypes.bool,
  title: PropTypes.string,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  leftStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rightStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  renderRight: PropTypes.func,
  renderLeft: PropTypes.func,

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

Input.defaultProps = {
  error: false,
  title: '',
  paddingLeft: 0,
  paddingRight: 0,
  renderLeft: () => { },
  renderRight: () => { },

  returnKeyType: 'next',
  placeholder: '',
  editable: true,
  disabled: false,
  keyboardType: 'default',
  maxLength: null,
  showErrorField: false,
  onChangeText: () => { },
  autoCapitalize: 'none',
  value: '',
  isSecureText: false,
  inputStyles: {},
  leftStyle: {},
  rightStyles: {},
  style: {},
  children: '',
};
