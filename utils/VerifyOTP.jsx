import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Btn from '../components/Btn';
import OTPField from '../components/OTPField';
import BackBtn from '../components/BackBtn';

const VerifyOTP = ({img, maintext, subtext, btnLabel, Press}) => {
  return (
    <View style={{marginTop: 10, height: '100%'}}>
      <BackBtn />
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 23, color: '#FF9401', textAlign: 'center'}}>
          Registration
        </Text>
        <Image source={img} style={{marginTop: 30}} />
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            textAlign: 'center',
            paddingTop: 30,
          }}>
          {maintext}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'gray',
            textAlign: 'center',
            paddingTop: 20,
          }}>
          {subtext}
        </Text>
        <OTPField />
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            textAlign: 'center',
          }}>
          Didn't received OTP?
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#FF9401',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Resend OTP
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 40,
          //   position: 'absolute',
          //   bottom: 30,
          width: '100%',
        }}>
        <Btn
          bgColor="#FF9401"
          textColor="white"
          btnLabel={btnLabel}
          Press={Press}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default VerifyOTP;
