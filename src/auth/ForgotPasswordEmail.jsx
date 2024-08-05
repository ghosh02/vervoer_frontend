import React from 'react';
// import SuccessPage from '../utils/SuccessPage';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Field from '../components/Field';
import Btn from '../components/Btn';
import BackBtn from '../components/BackBtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
const ForgotPasswordEmail = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 10, height: '100%'}}>
      {/* <BackBtn /> */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          <Icon
            name="arrowleft"
            size={35}
            color="#FF9401"
            style={{position: 'absolute', marginLeft: 10}}
          />
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize: 25, textAlign: 'center', color: '#FF9401'}}>
          Forgot Password
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            textAlign: 'center',
            paddingVertical: 30,
          }}>
          Enter your registered email
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'gray',
            textAlign: 'center',
            // paddingVertical: 20,
            paddingHorizontal: 15,
          }}>
          We will sent link to reset this on your email address
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            paddingLeft: 40,
            paddingTop: 30,
          }}>
          Email
        </Text>
        <View style={{alignItems: 'center'}}>
          <Field
            placeholder="Enter your email id"
            keyboardType="email-address"
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 50,
          // position: 'absolute',
          // bottom: 30,
          width: '100%',
        }}>
        <Btn
          bgColor="#FF9401"
          textColor="white"
          btnLabel="Send Link"
          Press={() => navigation.navigate('ForgotPassword')}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordEmail;
