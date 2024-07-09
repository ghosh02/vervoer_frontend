import React from 'react';
import {StyleSheet, View} from 'react-native';
import VerifyOTP from '../utils/VerifyOTP';
import {useNavigation} from '@react-navigation/native';

const NumberVerify = () => {
  const navigation = useNavigation();
  return (
    <View>
      <VerifyOTP
        img={require('../assets/phonenoverify.png')}
        maintext="Verify OTP"
        subtext="Enter the verification code send to your phone number"
        btnLabel="Verify OTP"
        Press={() => navigation.navigate('NumberVerifysuccess')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default NumberVerify;
