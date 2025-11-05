import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { screens } from '../../utils/Constants';
import Welcome from '../../screens/public/Welcome';
import Login from '../../screens/public/Login';
import ChangePassword from '../../screens/public/ChangePassword';
import ForgotPassword from '../../screens/public/ForgotPassword';
import ResetYourPassword from '../../screens/public/ResetYourPassword';
import PasswordUpdatedSuccessfully from '../../screens/public/PasswordUpdatedSuccessfully';
import PasswordResetSuccessfully from '../../screens/public/PasswordResetSuccessfully';
import PreferredLanguage from '../../screens/public/PreferredLanguage';
import Home from '../../screens/private/Home';
import EmailVerificationScreen from '../../screens/public/EmailVerification';
import ResetYourPasswordScreen from '../../screens/public/ResetYourPassword';

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'welcome'}>
          <Stack.Screen name={'welcome'} component={Welcome} />
          <Stack.Screen name={'login'} component={Login} />
          <Stack.Screen name={'forgot-password'} component={ForgotPassword} />
          <Stack.Screen name={'email-verification'} component={EmailVerificationScreen} />
          <Stack.Screen name={'reset-your-password'} component={ResetYourPasswordScreen} />
          <Stack.Screen name={'home'} component={Home} />
      </Stack.Navigator>
    </>
  );
};

export default PublicNavigation;