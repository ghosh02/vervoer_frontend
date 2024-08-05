import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Btn from '../../components/Btn';
import BackBtn from '../../components/BackBtn';
import NavMenu from '../../components/NavMenu';

const ContactUs = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [text, setText] = useState('');
  const data = [
    {label: 'sub1', value: ''},
    {label: 'sub2', value: ''},
    {label: 'sub3', value: ''},
  ];

  return (
    <View>
      <NavMenu />
      <BackBtn />
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          marginLeft: 70,
          marginBottom: 15,
        }}>
        Contact Us
      </Text>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderRadius: 14,
            marginBottom: 15,
          }}>
          <Text style={{color: 'black', fontSize: 14}}>Subject</Text>
          <Dropdown
            style={styles.dropdown}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Select subject"
            value={selectedValue}
            placeholderStyle={{color: 'black'}}
            selectedTextStyle={{color: 'black'}}
            itemTextStyle={{color: 'black'}}
            onChange={item => {
              setSelectedValue(item.value);
            }}
            renderRightIcon={() => (
              <Icon name="arrow-drop-down" size={24} color="black" />
            )}
          />
          <Text style={styles.label}>Add Note</Text>
          <TextInput
            placeholderTextColor="gray"
            multiline
            placeholder="Write here ...."
            value={text}
            onChange={item => {
              setText(item.value);
            }}
            style={styles.addNote}></TextInput>
        </View>
        <Btn btnLabel="send" size={20} width="85%" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 14,
    paddingVertical: 15,
  },
  dropdown: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  addNote: {
    color: 'black',
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 18,
    padding: 15,
    borderRadius: 14,
    height: 350,
    textAlignVertical: 'top',
  },
});

export default ContactUs;
