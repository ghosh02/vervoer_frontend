import React, {useContext, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import ProfileContext from '../context/ProfileContext';

const Navbar = () => {
  const {show, setShow} = useContext(ProfileContext);
  const {profilePic} = useContext(ProfileContext);
  const navigation = useNavigation();
  const [count, setCount] = useState(15);
  const handlePress = (id, screen) => {
    setSelectedId(id);
    navigation.navigate(screen);
  };
  return (
    <>
      {/* <View
        display={show ? 'block' : 'none'}
        style={{
          width: '80%',
          height: '100%',
          backgroundColor: '#ccc',
          position: 'relative',
          zIndex: 10,
          shadowColor: '#000',
          elevation: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}>
          <Iconclose
            name="close"
            size={25}
            color="#FF9401"
            style={{position: 'absolute', right: 10, top: 4}}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center', gap: 8, marginTop: 30}}>
          <Image
            source={require('../assets/profile.jpg')}
            style={{
              width: 150,
              height: 150,
              borderRadius: 200,
              borderWidth: 3,
              borderColor: 'white',
            }}
          />
          <Text style={{color: 'black', fontSize: 25}}>Jhon Doe</Text>
        </View>
        <View style={{gap: 30, paddingLeft: 30, paddingTop: 30}}>
          {data.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handlePress(item.id, item.screen)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 20,
              }}>
              <Icon
                name={item.icon}
                size={18}
                color={selectedId === item.id ? '#FF9401' : 'black'}
                style={{width: '10%'}}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: selectedId === item.id ? '#FF9401' : 'black',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View> */}
      <View style={styles.body}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            gap: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}>
            {profilePic === null ? (
              <Image
                source={require('../assets/profile.jpg')}
                style={{
                  objectFit: 'cover',
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
              />
            ) : (
              <Image
                source={{uri: profilePic}}
                style={{
                  objectFit: 'cover',
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LandingPage');
            }}>
            <Image
              source={require('../assets/fulllogo.png')}
              style={{
                width: 140,
                height: 30,
                objectFit: 'cover',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
            <Icon name="search" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Icons name="wallet" size={32} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationPage')}>
            <Icon name="bell" size={25} color="#000" />
            <Text
              display={count > 0 ? 'block' : 'none'}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                backgroundColor: '#FF9401',
                color: '#fff',
                fontSize: 14,
                textAlign: 'center',
                borderRadius: 100,
                right: -5,
                top: -7,
              }}>
              {count < 10 ? count : '9+'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
    backgroundColor: '#fff',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    shadowColor: '#000',
    elevation: 5,
    marginBottom: 14,
  },
});

export default Navbar;
