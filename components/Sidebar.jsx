import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import ProfileContext from '../context/ProfileContext';
import {useNavigation} from '@react-navigation/native';
const data = [
  {id: 1, screen: 'LandingPage', title: 'Home', icon: 'home'},
  {id: 2, screen: 'MyProfile', title: 'My Profile', icon: 'user'},
  {id: 3, screen: 'FareCard', title: 'Fare Card', icon: 'credit-card'},
  {
    id: 4,
    screen: 'LandingPage',
    title: 'Payment Methods',
    icon: 'money-check-alt',
  },
  {id: 5, screen: 'LandingPage', title: 'Tips & Info', icon: 'lightbulb'},
  {id: 6, screen: 'LandingPage', title: 'Settings', icon: 'mail-bulk'},
  {id: 7, screen: 'ContactUs', title: 'Contuct Us', icon: 'mail-bulk'},
  {
    id: 8,
    screen: 'ResetPassword',
    title: 'Reset Password',
    icon: 'unlock-alt',
  },
  {id: 9, screen: 'Home', title: 'Log out', icon: 'sign-out-alt'},
];

const Profile = () => {
  const sidebarRef = useRef(null);
  const {show, setShow, profilePic} = useContext(ProfileContext);
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(1);
  const handlePress = (id, screen) => {
    setSelectedId(id);
    setShow(false);
    navigation.navigate(screen);
  };
  return (
    <>
      {show ? (
        <View
          style={{
            width: '80%',
            height: '100%',
            backgroundColor: '#eee',
            position: 'absolute',
            zIndex: 100,
            borderTopRightRadius: 26,
            shadowColor: '#000',
            elevation: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}>
            <Icons
              name="close-outline"
              size={35}
              color="#FF9401"
              style={{position: 'absolute', right: 4, top: 4}}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center', gap: 8, marginTop: 30}}>
            {profilePic === null ? (
              <Image
                source={require('../assets/profile.jpg')}
                style={{
                  objectFit: 'cover',
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                }}
              />
            ) : (
              <Image
                source={{uri: profilePic}}
                style={{
                  objectFit: 'cover',
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                }}
              />
            )}
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
        </View>
      ) : (
        ''
      )}
    </>
  );
};

export default Profile;
