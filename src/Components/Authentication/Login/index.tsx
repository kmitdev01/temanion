import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, Input, Avatar} from '../../ReusableComponents/Components';
import {useTheme} from '@shopify/restyle';
import {Text, Theme} from '../../Theme';
import {CheckBox} from 'react-native-elements';
import {Button} from '../../ReusableComponents/Components';
import CommonStyles from '../../Theme/commonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface ILogin {
  navigation?: any;
}

const LoginScreen = ({navigation}: ILogin) => {
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
        <View
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
            Sign In{' '}
          </Text>
          <Text variant="h3">Log in to your existing account of Teman </Text>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-around',
              // borderWidth: 1,
            }}>
            <Input
              placeholder={'Enter mobile number'}
              label={'Phone Number'}
              keyboardType="number-pad"
            />
            <Input
              placeholder={'Enter your password'}
              label={'Password'}
              isPassword={true}
            />
          </View>
          <View style={styles.rememberContainer}>
            <CheckBox
              checked={!!rememberMe}
              onPress={() => {
                setRememberMe(!rememberMe);
              }}
              size={22}
              containerStyle={styles.checkBox}
              checkedColor={theme.colors.secondary}
              title="Remember me"
              textStyle={{backgroundColor: 'white'}}
            />
            <Text
              style={{flex: 1, textAlign: 'right'}}
              variant="secondarySmall">
              Forgot Password?
            </Text>
          </View>
          <Button text="SIGN IN" />
        </View>
      </KeyboardAwareScrollView>
      <View style={CommonStyles.footerTextContainer}>
        <Text style={{textAlign: 'center'}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: theme.colors.primary}}> Sign Up</Text>
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
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    margin: 0,
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

export default LoginScreen;
