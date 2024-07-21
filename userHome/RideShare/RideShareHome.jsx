import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import NavMenu from '../../components/NavMenu';
import {useNavigation} from '@react-navigation/native';
import ToggleBtn from '../../components/ToggleBtn';
import Icon from 'react-native-vector-icons/AntDesign';

const component = [
  {
    id: '1',
    title: 'Ride Share',
    src: require('../../assets/rideshare.png'),
    screen: 'RideShare',
  },
  {
    id: '2',
    title: 'Live Session',
    src: require('../../assets/livesession.png'),
    screen: 'LiveSession',
  },
  {
    id: '3',
    title: 'History',
    src: require('../../assets/history.png'),
    screen: 'RideHistory',
  },
  {
    id: '4',
    title: 'Drivers Application',
    src: require('../../assets/driver.png'),
    screen: 'RideType',
  },
];
const RideShareHome = () => {
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
        <Text style={{color: '#000', fontSize: 20}}>Ride Share</Text>
      </View>
      <Text style={{color: '#666', fontSize: 14, marginLeft: 50}}>
        Find Nearby Cars For Your Ride
      </Text>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <ToggleBtn />
      </View>

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

export default RideShareHome;
