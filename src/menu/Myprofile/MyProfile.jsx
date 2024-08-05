import React, {useContext, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';
import {launchCamera} from 'react-native-image-picker';
import NavMenu from '../../components/NavMenu';
import ProfileContext from '../../context/ProfileContext';

const MyProfileData = [
  {id: 1, title: 'First Name', data: 'Jhon'},
  {id: 2, title: 'Last Name', data: 'Doe'},
  {id: 3, title: 'Email ID', data: 'Jhondoe@gmail.com'},
  {id: 4, title: 'Mobile Number', data: '+1 9999999900'},
  {id: 5, title: 'Country', data: 'USA'},
  {id: 6, title: 'State', data: 'New York'},
  {id: 7, title: 'Zip Code', data: '408888'},
];
const MyProfile = ({navigation}) => {
  // const [profilePic, setProfilePic] = useState(null);
  const {profilePic, setProfilePic} = useContext(ProfileContext);
  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      cameraType: 'front',
      maxHeight: 200,
      maxWidth: 300,
      quality: 1,
    };
    launchCamera(options, handleResponse);
  };

  const handleResponse = response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setProfilePic(imageUri);
    }
  };
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <BackBtn />
        <Text style={{marginLeft: 70, fontSize: 20, color: 'black'}}>
          My Profile
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
            width: '100%',
          }}>
          <View>
            {profilePic === null ? (
              <Image
                source={require('../../assets/profile.jpg')}
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

            <TouchableOpacity
              onPress={() => {
                handleCameraLaunch();
              }}
              style={{
                position: 'absolute',
                bottom: 0,
                right: -2,
                backgroundColor: '#FF9401',
                width: 50,
                height: 50,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 3,
                borderColor: 'white',
              }}>
              <Icon name="camera" size={20} color="white" style={{}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '90%',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 15,
              marginVertical: 10,
              shadowColor: '#bbb',
              elevation: 50,
            }}>
            {MyProfileData.map(item => (
              <View
                key={item.id}
                style={{
                  marginTop: 20,
                  width: '100%',
                  gap: 5,
                }}>
                <Text style={{color: '#222'}}>{item.title}</Text>
                <Text
                  style={{borderBottomWidth: 1, fontSize: 20, color: '#666'}}>
                  {item.data}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <Btn
          btnLabel="Edit Info"
          size={20}
          Press={() => navigation.navigate('EditProfile')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyProfile;
