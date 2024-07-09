import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import VerifyOTP from '../utils/VerifyOTP';
import {useNavigation} from '@react-navigation/native';

const EmailVerify = () => {
  const navigation = useNavigation();
  return (
    <View>
      <VerifyOTP
        img={require('../assets/emailverification.png')}
        maintext="Verify Email Id"
        subtext="Enter the verification code send to your email Id"
        btnLabel="Verify email"
        Press={() => {
          navigation.navigate('EmailVerifySuccess');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EmailVerify;
