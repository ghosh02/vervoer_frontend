import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import NavMenu from '../components/NavMenu';

const dryCleaningDetail = [
  {
    id: 1,
    name: 'Jason Anderson',
    pickupLocation: '123,Linkon Street,Newyork',
    dropoffLocation: '123,Linkon Street,Newyork',
    distance: '30',
    time: '50',
    price: 22.3,
  },
  {
    id: 2,
    name: 'Jason Anderson',
    pickupLocation: '123,Linkon Street,Newyork',
    dropoffLocation: '123,Linkon Street,Newyork',
    distance: '30',
    time: '50',
    price: 22.3,
  },
  {
    id: 3,
    name: 'Jason Anderson',
    pickupLocation: '123,Linkon Street,Newyork',
    dropoffLocation: '123,Linkon Street,Newyork',
    distance: '30',
    time: '50',
    price: 22.3,
  },
  {
    id: 4,
    name: 'Jason Anderson',
    pickupLocation: '123,Linkon Street,Newyork',
    dropoffLocation: '123,Linkon Street,Newyork',
    distance: '30',
    time: '50',
    price: 22.3,
  },
];

const LocateDryCleaning = ({navigation}) => {
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <View
        style={{
          height: '50%',
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            // backgroundColor: 'red',
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            position: 'absolute',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 10, marginLeft: 10}}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 18}}>Locate Dry Cleaning</Text>
        </View>
      </View>
      <View style={styles.detailcontainer}>
        <View
          style={{
            width: 60,
            height: 5,
            backgroundColor: '#ddd',
            borderRadius: 8,
            marginTop: 15,
          }}
        />
        <View>
          <View>
            <Image source={require('../assets/user.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailcontainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: '#000',
    elevation: 3,
  },
});

export default LocateDryCleaning;
