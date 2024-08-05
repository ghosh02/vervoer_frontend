import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Field from '../components/Field';
import Btn from '../components/Btn';
import BackBtn from '../components/BackBtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Personalinfo = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 10, height: '100%'}}>
      <BackBtn />
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{zIndex: 10}}>
        <Icon name="arrowleft" size={30} color="#FF9401" />
      </TouchableOpacity> */}
      <View>
        <Text style={{fontSize: 23, color: '#FF9401', textAlign: 'center'}}>
          Registration
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            textAlign: 'center',
            paddingTop: 30,
          }}>
          Enter Your Personal info
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'gray',
            textAlign: 'center',
            paddingTop: 20,
          }}>
          Please enter the below details.we will sent OTP to email to verify
        </Text>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          First name
        </Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Field placeholder="First name" />
        </View>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          Last name
        </Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Field placeholder="Last name" />
        </View>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          Enter email Id
        </Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Field placeholder="Enter email Id" />
        </View>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          ZIP code
        </Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Field placeholder="Enter zip code" />
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 40,
            // position: 'absolute',
            // bottom: 30,
            // width: '100%',
          }}>
          <Btn
            bgColor="#FF9401"
            textColor="white"
            btnLabel="Continue"
            Press={() => navigation.navigate('EmailVerify')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Personalinfo;
