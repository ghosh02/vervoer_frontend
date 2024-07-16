import React, {useContext, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from '../utils/Carousel';
import Navbar from '../components/Navbar';
import NavMenu from '../components/NavMenu';
import {useNavigation} from '@react-navigation/native';
const boxData = [
  {id: '1', screen: 'UserHome', iconName: 'user', title: 'User'},
  {id: '2', screen: 'DriverHome', iconName: 'car', title: 'Driver'},
  {id: '3', screen: 'MarchantHome', iconName: 'building', title: 'Marchant'},
];
const images = [
  {id: '1', src: require('../assets/carousel.png')},
  {id: '2', src: require('../assets/carousel.png')},
  {id: '3', src: require('../assets/carousel.png')},
  {id: '4', src: require('../assets/carousel.png')},
  // Add more images here
];
const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: '100%', flex: 1}}>
      <NavMenu />
      <View style={{flex: 1}}>
        <Carousel data={images} />
        <ScrollView>
          <View
            style={{
              gap: 15,
              alignItems: 'center',
              marginTop: 20,
            }}>
            {boxData.map(item => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                key={item.id}
                style={{
                  width: '90%',
                  height: 150,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 16,
                  shadowColor: '#999',
                  elevation: 5,
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
        </ScrollView>
      </View>
    </View>
  );
};

export default LandingPage;
