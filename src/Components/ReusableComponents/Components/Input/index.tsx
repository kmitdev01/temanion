import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  TextInputProps,
} from 'react-native';
import {Theme, Text} from '../../../Theme';
import {useTheme} from '@shopify/restyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IInput {
  placeholder: string;
  label: string;
  isPassword?: boolean;
}

const Input = ({
  placeholder,
  label,
  isPassword,
  ...rest
}: IInput & TextInputProps) => {
  const theme = useTheme<Theme>();
  const [hidePassword, setHidePassword] = useState(!!isPassword);
  return (
    <View
      style={[
        styles.main,
        {
          height: theme.layout.input,
          borderRadius: theme.spacing.xl,
          borderColor: theme.colors.darkC,
          marginVertical: theme.spacing.sm,
        },
      ]}>
      <Text variant="mainLabel">{label}</Text>
      <TextInput
        style={{
          flex: 1,
          fontSize: 18,
        }}
        placeholder={placeholder}
        secureTextEntry={hidePassword}
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            size={23}
            style={{
              color: hidePassword ? theme.colors.darkC : theme.colors.secondary,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
