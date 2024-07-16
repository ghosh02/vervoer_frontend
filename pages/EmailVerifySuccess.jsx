import React from 'react';
import {StyleSheet, View} from 'react-native';
import SuccessPage from '../utils/SuccessPage';

const EmailVerifySuccess = ({navigation}) => {
  return (
    <View>
      <SuccessPage
        headline="Registration"
        main="Success"
        title1="Your Email ID is Verified"
        title2="Successfully"
        img={require('../assets/emailid.png')}
        btnLabel="Continue"
        Press={() => navigation.navigate('LandingPage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EmailVerifySuccess;
