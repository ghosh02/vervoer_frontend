import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#FF9401',
        height: '100%',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          borderBottomRightRadius: 300,
        }}>
        <Image source={require('../assets/logo.png')} style={{marginTop: 10}} />
        <View style={{paddingLeft: 30}}>
          <Text style={{color: 'black', fontSize: 35, fontWeight: 'semibold'}}>
            Rides, Parking{' '}
          </Text>
          <Text style={{color: 'black', fontSize: 35, fontWeight: 'semibold'}}>
            & Dry cleaning{' '}
          </Text>
          <Text style={{color: 'black', fontSize: 35, fontWeight: 'semibold'}}>
            in an instants!
          </Text>
        </View>
        <Image source={require('../assets/car.png')} />
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 5,
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'semibold'}}>
          Get Started
          <Image source={require('../assets/arrow.png')} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
