import React from 'react';
import {StyleSheet, View} from 'react-native';
import SuccessPage from '../utils/SuccessPage';
import {useNavigation} from '@react-navigation/native';
const NumberVerifysuccess = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SuccessPage
        headline="Registration"
        main="Success"
        title1="Your Number is Verified"
        title2="Successfully"
        img={require('../assets/phone.png')}
        btnLabel="Continue"
        Press={() => {
          navigation.navigate('Personalinfo');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default NumberVerifysuccess;
