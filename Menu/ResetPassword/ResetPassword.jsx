import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';
import NavMenu from '../../components/NavMenu';

const ResetPassword = () => {
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <BackBtn />
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          marginLeft: 70,
          marginBottom: 15,
        }}>
        Reset Password
      </Text>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: '75%',
            padding: 15,
            borderRadius: 14,
            marginBottom: 20,
          }}>
          <View style={{width: '100%'}}>
            <Text style={styles.text}>Current Password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="black"
              placeholder="Enter current password"></TextInput>
            <Text style={styles.text}>Create New Password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="black"
              placeholder="Enter New password"></TextInput>
            <Text style={styles.text}>Re-enter password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="black"
              placeholder="Re-enter New password"></TextInput>
          </View>
        </View>
        <Btn btnLabel="Reset Now" width="90%" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    alignItems: 'center',
  },
  input: {
    color: '#000',
    width: '100%',
    borderBottomWidth: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    height: 45,
  },
  text: {
    color: 'gray',
    marginTop: 10,
  },
});

export default ResetPassword;
