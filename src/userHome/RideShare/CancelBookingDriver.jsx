import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Btn from '../../../components/Btn';
import NavMenu from '../../components/NavMenu';

const CancelBookingDriver = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 18}}>Ride Cancelled</Text>
        </View>
        <Text style={{fontSize: 16, color: '#FF9401'}}>#RS12345</Text>
      </View>
      <View
        style={{
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/cancelridedriver.png')}
          style={{
            width: 130,
            height: 100,
            objectFit: 'cover',
          }}
        />
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text style={{fontSize: 20, color: '#FF9401', marginBottom: 10}}>
            Ride Cancelled By Driver
          </Text>
          <Text style={{fontSize: 16, color: '#444'}}>There is an error</Text>
          <Text style={{fontSize: 16, color: '#444'}}>Please try again</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 10,
          width: '100%',
        }}>
        <Btn
          btnLabel="Find New Ride"
          Press={() => navigation.navigate('RideShare')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CancelBookingDriver;
