import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import NavMenu from '../../components/NavMenu';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
// import ToggleBtn from '../../components/ToggleBtn';

const component = [
  {
    id: '1',
    title: 'Find Parking',
    src: require('../../assets/parking.png'),
    screen: 'BookParking',
  },
  {
    id: '2',
    title: 'My QR code',
    src: require('../../assets/scan.png'),
    screen: 'LiveSession',
  },
  {
    id: '3',
    title: 'Live Session',
    src: require('../../assets/livesession.png'),
    screen: 'RideType',
  },
  {
    id: '4',
    title: 'History',
    src: require('../../assets/history.png'),
    screen: 'RideHistory',
  },
];
const ParkingHome = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginLeft: 10,
        }}>
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
        <Text style={{color: '#000', fontSize: 20}}>Parking</Text>
      </View>
      <Text style={{color: '#888', fontSize: 14, marginLeft: 50}}>
        Find And Book Parking Near Home
      </Text>
      <View style={styles.container}>
        {component.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.component}
            onPress={() => navigation.navigate(item.screen)}>
            <Image source={item.src} />
            <Text style={{color: '#000', fontSize: 14, textAlign: 'center'}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    gap: 15,
    width: '100%',
    justifyContent: 'center',
  },
  component: {
    width: '43%',
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

export default ParkingHome;
