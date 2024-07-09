import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from '../utils/Carousel';
import Navbar from '../components/Navbar';
const boxData = [
  {id: '1', iconName: 'user', title: 'User'},
  {id: '2', iconName: 'car', title: 'Driver'},
  {id: '3', iconName: 'building', title: 'Marchant'},
];
const LandingPage = () => {
  return (
    <View style={{}}>
      <Navbar />
      <View>
        <Carousel />
        <View
          style={{
            gap: 15,
            alignItems: 'center',
            marginTop: 20,
          }}>
          {boxData.map(item => (
            <TouchableOpacity
              key={item.id}
              style={{
                width: '90%',
                height: 150,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
                shadowColor: '#999',
                elevation: 50,
              }}>
              <Icon
                name={item.iconName}
                size={40}
                color="#FF9401"
                style={{paddingBottom: 10}}
              />
              <Text style={{fontSize: 16, color: 'black'}}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
