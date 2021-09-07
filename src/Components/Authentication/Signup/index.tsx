import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, Input, Avatar} from '../../ReusableComponents/Components';
import {useTheme} from '@shopify/restyle';
import {Text, Theme} from '../../Theme';
import {Button} from '../../ReusableComponents/Components';
import CommonStyles from '../../Theme/commonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface ISignup {
  navigation?: any;
}

const SignupScreen = ({navigation}: ISignup) => {
  const [rememberMe, setRememberMe] = useState(false);
  const theme = useTheme<Theme>();
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.white,
        flex: 1,
      }}>
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.mainContainer,
          {
            backgroundColor: theme.colors.primary,
          },
        ]}>
        <Header />
        <KeyboardAvoidingView
          style={[
            styles.contentContainer,
            {
              backgroundColor: theme.colors.white,
              borderRadius: theme.spacing.xl,
              paddingHorizontal: theme.spacing.m,
            },
          ]}>
          <Avatar />
          <Text variant="h1" style={styles.marginTop}>
            Sign Up
          </Text>
          <Text variant="h3">Register yourself </Text>
          <View
            style={{
              marginTop: 20,
            }}>
            <Input placeholder={'Enter Full Name'} label={'Full Name'} />
            <Input
              placeholder={'Enter Email'}
              label={'Email'}
              keyboardType="email-address"
            />
            <Input
              placeholder={'Enter Phone Number'}
              label={'Phone Number'}
              keyboardType="number-pad"
            />
            <Input
              placeholder={'Enter your password'}
              label={'Password'}
              isPassword
            />
            <Input
              placeholder={'Enter your password'}
              label={'Confirm Password'}
              isPassword
            />
          </View>
          <View style={{marginTop: 20, width: '90%'}}>
            <Button text="Continue" />
          </View>
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
      <View style={CommonStyles.footerTextContainer}>
        <Text style={{textAlign: 'center'}}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: theme.colors.primary}}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 75,
  },
  mainContainer: {
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    margin: 0,
    paddingBottom: 30,
  },
  rememberContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkBox: {
    backgroundColor: 'white',
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
});

export default SignupScreen;
