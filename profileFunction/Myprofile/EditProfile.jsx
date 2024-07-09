import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navbar from '../components/Navbar';
import BackBtn from '../components/BackBtn';

const EditProfile = () => {
  return (
    <View>
      <Navbar />
      <View>
        <BackBtn />
        <Text>Fare Card</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditProfile;
