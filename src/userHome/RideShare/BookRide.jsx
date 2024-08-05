import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/FontAwesome5';
import ToggleBtn from '../../components/ToggleBtn';
import Btn from '../../components/Btn';
import NavMenu from '../../components/NavMenu';

const rideType = [
  {
    id: 1,
    type: 'Ecenomy',
    dropOff: '19:30',
    title: 'Hatchbacks , Affortable',
    image: require('../../assets/economy.png'),
    fare: 150,
  },
  {
    id: 2,
    type: 'Premier',
    dropOff: '19:30',
    title: 'Sedan , Top-rated Driver',
    image: require('../../assets/premium.png'),
    fare: 200,
  },
];

const BookRide = ({route, navigation}) => {
  const {selectedItem} = route.params;
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
          <Text style={{color: '#000', fontSize: 18}}>Book New RIde</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: '#FF9401',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
            }}>
            <Image
              style={{objectFit: 'contain', width: 15, height: 15}}
              source={require('../../assets/video.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: 100,
              height: 30,
              backgroundColor: '#666',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              borderRadius: 5,
            }}>
            <Icons name="filter" size={20} color="#fff" style={{zIndex: 10}} />
            <Text style={{color: '#fff', fontSize: 18}}>Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          bottom: 0,
          width: '100%',
          alignItems: 'center',
          paddingVertical: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View
          style={{
            width: 60,
            height: 7,
            backgroundColor: '#ddd',
            borderRadius: 2,
            marginBottom: 10,
          }}></View>
        <ToggleBtn />
        <View
          style={{gap: 10, marginTop: 30, alignItems: 'center', width: '100%'}}>
          {rideType.map(item => (
            <View
              key={item.id}
              style={{
                width: '95%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 16,
                paddingHorizontal: 15,
                paddingVertical: 20,
                backgroundColor: selectedItem === item.id ? '#FFEFE3' : '#eee',
              }}>
              <Image source={item.image} />
              <View>
                <View>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Text style={[styles.text, {marginRight: 15}]}>
                      {item.type}
                    </Text>
                    <Ico name="user-friends" size={20} color="#000" />
                    <Text style={styles.text}>2</Text>
                  </View>
                  <Text style={styles.text}>{item.dropOff} drop off</Text>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </View>
              <Text style={{color: '#FF9401', fontSize: 16}}>${item.fare}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Wallet')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Icons name="wallet" size={32} color="#444" />
            <Text style={{fontSize: 25, color: '#000'}}>Wallet</Text>
            <Text style={{fontSize: 16, color: '#FF9401'}}>($2500.00)</Text>
          </View>
          <Icon name="right" size={25} color="#000" />
        </TouchableOpacity>
        <Btn
          btnLabel="Send Request"
          Press={() => navigation.navigate('RideDetails')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#000',
  },
});

export default BookRide;
