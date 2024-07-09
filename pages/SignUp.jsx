import React, {useRef, useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Field from '../components/Field';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import BackBtn from '../components/BackBtn';
const SignUp = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [value, setValue] = useState('');
  return (
    <View style={{marginTop: 10, height: '100%'}}>
      <BackBtn />
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
          Enter Your Phone No.
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'gray',
            textAlign: 'center',
            paddingTop: 20,
          }}>
          Please enter your phone number.we will sent OTP to verify
        </Text>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          Phone Number
        </Text>
        <View style={{alignItems: 'center', maxWidth: '100%'}}>
          <PhoneInput
            defaultValue={value}
            defaultCode="US"
            layout="second"
            textInputProps={{placeholderTextColor: 'gray', fontSize: 18}}
            onChangeText={number => {
              setValue(number);
            }}
            // onChangeText={handleChangeText}
            containerStyle={{
              borderBottomWidth: 1,
              paddingVertical: 0,
              backgroundColor: '',
            }}
            textContainerStyle={{
              backgroundColor: '',
              paddingVertical: 0,
            }}
            textInputStyle={{color: 'black'}}
          />
        </View>

        <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
          Create Password
        </Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Field placeholder="Password" secureTextEntry={show} />
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}>
              <Icon
                name="eye"
                size={20}
                color={show ? 'gray' : 'black'}
                style={{position: 'absolute', right: 0, zIndex: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{color: 'black', paddingLeft: 40}}>Min. 8 characters</Text>
        <Text style={{color: 'black', paddingLeft: 40, marginTop: 25}}>
          Re-enter Password
        </Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Field placeholder="Re-enter Password" secureTextEntry={true} />
        </View>
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
          Press={() => navigation.navigate('NumberVerify')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
