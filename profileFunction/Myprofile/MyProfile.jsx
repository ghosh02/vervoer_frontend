import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/Navbar';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';

const MyProfileData = [
  {id: 1, title: 'First Name', data: 'Jhon'},
  {id: 2, title: 'Last Name', data: 'Doe'},
  {id: 3, title: 'Email ID', data: 'Jhondoe@gmail.com'},
  {id: 4, title: 'Mobile Number', data: '+1 9999999900'},
  {id: 5, title: 'Country', data: 'USA'},
  {id: 6, title: 'State', data: 'New York'},
  {id: 7, title: 'Zip Code', data: '408888'},
];
const MyProfile = () => {
  return (
    <View style={{flex: 1}}>
      <Navbar />
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
            <Image
              source={require('../assets/profile.jpg')}
              style={{
                objectFit: 'cover',
                width: 120,
                height: 120,
                borderRadius: 100,
              }}
            />
            <View
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
            </View>
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
                <Text style={{color: 'black'}}>{item.title}</Text>
                <Text
                  style={{borderBottomWidth: 1, fontSize: 20, color: 'black'}}>
                  {item.data}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <Btn btnLabel="Edit Info" size={20} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyProfile;
