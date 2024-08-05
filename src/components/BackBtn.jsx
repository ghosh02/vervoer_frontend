import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{zIndex: 10}}>
      <Icon
        name="arrowleft"
        size={30}
        color="#FF9401"
        style={{position: 'absolute', marginLeft: 10, zIndex: 10}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BackBtn;
