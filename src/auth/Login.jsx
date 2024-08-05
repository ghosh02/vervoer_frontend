import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Btn from '../components/Btn';
import Field from '../components/Field';
import BackBtn from '../components/BackBtn';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const images = [
  {id: 1, src: require('../assets/google.png')},
  {id: 2, src: require('../assets/fb.png')},
  {id: 3, src: require('../assets/apple.png')},
];
const Login = () => {
  const [show, setShow] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BackBtn />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/fulllogo.png')} />
      </View>
      <View style={{marginTop: 60}}>
        <Text style={styles.text}>Email</Text>
        <View style={{alignItems: 'center'}}>
          <Field placeholder="Enter Mobile Number or Email ID" />
        </View>
        <Text style={styles.text}> Password</Text>
        <View style={{alignItems: 'center'}}>
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
                color={show ? '#aaa' : 'black'}
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
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Btn
            btnLabel="Login"
            Press={() => navigation.navigate('LandingPage')}
          />
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
            {images.map(item => (
              <TouchableOpacity
                key={item.id}
                style={{borderWidth: 1, padding: 6, borderRadius: 50}}>
                <Image
                  source={item.src}
                  style={{
                    width: 30,
                    height: 30,
                    objectFit: 'contain',
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={{flexDirection: 'row', gap: 10, marginTop: 20}}>
            <Text style={{color: 'black', textAlign: 'center', fontSize: 16}}>
              Don't have an account ?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  color: '#FF9401',
                  fontWeight: 600,
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  text: {color: 'black', paddingLeft: '10%', marginTop: 15},
});

export default Login;
