import React from 'react';
import {StyleSheet, View} from 'react-native';
import SuccessPage from '../utils/SuccessPage';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SuccessPage
        main="Sent"
        title1="Reset Password Link is Send to"
        title2="Your Email ID"
        img={require('../assets/email.png')}
        btnLabel="Back to Login"
        headline="Forgot Password"
        Press={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default ForgotPassword;
