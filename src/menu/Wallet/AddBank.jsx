import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavMenu from '../../components/NavMenu';

const AddBank = ({navigation}) => {
  const [routingNumber, setRoutingNumber] = useState(null);
  const [accHolderName, setAccHolderName] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [accNumber, setAccNumber] = useState('');
  const data = [
    {label: '12345678', value: ''},
    {label: '12345678', value: ''},
    {label: '12345678', value: ''},
  ];
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <BackBtn />
      <Text style={styles.title}>Add Bank Account</Text>
      <View style={{alignItems: 'center', width: '100%', marginTop: 30}}>
        <View
          style={{
            paddingVertical: 20,
            width: '90%',
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            borderRadius: 14,
          }}>
          <Text style={{fontSize: 20, color: '#000', paddingLeft: 10}}></Text>
          <View style={{alignItems: 'center', paddingVertical: 10}}>
            <View style={styles.inputContainer}>
              <Dropdown
                style={styles.input}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Routing Number"
                value={routingNumber}
                placeholderStyle={{color: '#666'}}
                selectedTextStyle={{color: 'black'}}
                itemTextStyle={{color: 'black'}}
                onChange={item => {
                  setRoutingNumber(item.value);
                }}
                renderRightIcon={() => (
                  <Icon name="angle-down" size={20} color="gray" />
                )}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#666"
                placeholder="Account Number"
                value={accNumber}
                onChangeText={setAccNumber}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#666"
                placeholder="IFSC Code"
                value={ifsc}
                onChangeText={setIfsc}
                keyboardType="name-phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#666"
                placeholder="Account Holder Name"
                value={accHolderName}
                onChangeText={setAccHolderName}
                keyboardType="default"
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 50,
          width: '100%',
          alignItems: 'center',
        }}>
        <Btn btnLabel="Save" size={20} width="90%" />
      </View>
    </View>
  );
};

export default AddBank;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft: 50,
    color: '#000',
  },
  input: {
    color: '#000',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  inputContainer: {
    width: '100%',
    gap: 10,
    // minHeight: '40%',
  },
});
