import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Btn from '../components/Btn';
import Field from '../components/Field';
import BackBtn from '../components/BackBtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Login = () => {
  const [show, setShow] = useState(true);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#FF9401',
        minHeight: '100%',
        marginTop: 10,
      }}>
      <BackBtn />
      <View
        style={{
          backgroundColor: 'white',
          minHeight: 780,
          borderBottomRightRadius: 300,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 60,
          }}>
          <Image source={require('../assets/fulllogo.png')} />
        </View>
        <View style={{paddingTop: 60}}>
          <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
            Email
          </Text>
          <View style={{alignItems: 'center'}}>
            <Field placeholder="Enter Mobile Number or Email ID" />
          </View>
          <Text style={{color: 'black', paddingLeft: 40, marginTop: 15}}>
            Password
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
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordEmail')}>
            <Text style={{paddingLeft: 40, marginTop: 10, color: '#FF9401'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <Btn
              bgColor="#FF9401"
              textColor="white"
              btnLabel="Login"
              Press={() => navigation.navigate('FirstPage')}
            />
          </View>
        </View>
        <Text style={{color: 'black', textAlign: 'center', fontSize: 16}}>
          or Login with
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <View style={{borderWidth: 1, padding: 6, borderRadius: 50}}>
            <Image
              source={require('../assets/google.png')}
              style={{
                width: 30,
                height: 30,
                objectFit: 'contain',
              }}
            />
          </View>
          <View style={{borderWidth: 1, padding: 6, borderRadius: 50}}>
            <Image
              source={require('../assets/fb.png')}
              style={{
                width: 30,
                height: 30,
                objectFit: 'contain',
              }}
            />
          </View>
          <View style={{borderWidth: 1, padding: 6, borderRadius: 50}}>
            <Image
              source={require('../assets/apple.png')}
              style={{
                width: 30,
                height: 30,
                objectFit: 'contain',
              }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', bottom: 20, right: 5}}
        onPress={() => {
          navigation.navigate('Personalinfo');
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'semibold'}}>
          Sign up
          <Image source={require('../assets/arrow.png')} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
