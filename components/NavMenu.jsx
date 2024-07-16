import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Navbar from './Navbar';
import {useNavigation} from '@react-navigation/native';
import Profile from './Sidebar';
const NavMenu = () => {
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
};

const styles = StyleSheet.create({});

export default NavMenu;
