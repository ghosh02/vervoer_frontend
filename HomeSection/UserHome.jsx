import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import NavMenu from '../components/NavMenu';
import Carousel from '../utils/Carousel';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const images = [
  {id: '1', src: require('../assets/carousel.png')},
  {id: '2', src: require('../assets/carousel.png')},
  {id: '3', src: require('../assets/carousel.png')},
  {id: '4', src: require('../assets/carousel.png')},
  // Add more images here
];
const component = [
  {
    id: '1',
    screen: 'RideShareHome',
    title: 'Ride Share',
    src: require('../assets/rideshare.png'),
  },
  {
    id: '2',
    screen: 'ParkingHome',
    title: 'Parking',
    src: require('../assets/parking.png'),
  },
  {
    id: '3',
    screen: 'RideShare',
    title: 'Dry Cleaners',
    src: require('../assets/drycleaning.png'),
  },
];
const UserHome = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 10}}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 18}}>User - Home</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <Image source={require('../assets/scan.png')} />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 12}}>Scan QR</Text>
        </View>
      </View>
      <Carousel data={images} />

      <View style={styles.container}>
        {component.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.component}
            onPress={() => navigation.navigate(item.screen)}>
            <Image source={item.src} />
            <Text style={{color: '#000', fontSize: 14}}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    gap: 8,
    justifyContent: 'center',
  },
  component: {
    width: '30%',
    height: 120,
    gap: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    shadowColor: '#000',
    elevation: 3,
  },
});

export default UserHome;
