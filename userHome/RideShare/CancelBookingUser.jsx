import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import Btn from '../../components/Btn';

const CancelBookingUser = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          paddingLeft: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrowleft"
            size={30}
            color="#FF9401"
            style={{zIndex: 10}}
          />
        </TouchableOpacity>
        <Text style={{color: '#000', fontSize: 18}}>Ride Details</Text>
      </View>
      <View
        style={{
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/cancelbooking.png')}
          style={{
            width: 130,
            height: 100,
            objectFit: 'cover',
          }}
        />
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text style={{fontSize: 20, color: '#FF9401'}}>Cancel Booking</Text>
          <Text style={{fontSize: 20, color: '#FF9401', marginBottom: 15}}>
            Successfully
          </Text>
          <Text style={{fontSize: 16, color: '#444'}}>
            Booking ID :
            <Text style={{fontSize: 16, color: '#FF9401'}}> #RS12344</Text>
          </Text>
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
        <Btn
          bgColor="#666"
          btnLabel="Go To Home"
          Press={() => navigation.navigate('LandingPage')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CancelBookingUser;
