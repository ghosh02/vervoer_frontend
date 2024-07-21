// RadioButtonGroup.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import Btn from '../../components/Btn';

const RadioButton = ({label, onPress, isSelected}) => {
  return (
    <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
      <View style={[styles.radioCircle, isSelected && styles.selectedRadio]}>
        <View style={isSelected && styles.selectedRadioInner} />
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const CancelRide = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [text, setText] = useState('');

  const options = [
    'Car is not same as shown in photos',
    'Wrong Address Shown',
    'Change My Mind',
    'Found Better Car',
    'Cancelled Plan',
    'Other Reason',
  ];

  return (
    <View style={{height: '100%', flex: 1}}>
      <NavMenu />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 18}}>Cancel Booking</Text>
        </View>

        <Text style={{fontSize: 16, color: '#FF9401'}}>#R12345</Text>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              backgroundColor: '#fff',
              marginTop: 40,
            }}>
            <View style={{width: '100%', gap: 5}}>
              {options.map((option, index) => (
                <View
                  key={index}
                  style={{backgroundColor: '#eee', width: '100%'}}>
                  <RadioButton
                    label={option}
                    onPress={() => setSelectedOption(option)}
                    isSelected={selectedOption === option}
                  />
                </View>
              ))}
            </View>
          </View>

          <TextInput
            placeholderTextColor="gray"
            multiline
            placeholder="Write Your Reason...."
            value={text}
            onChange={item => {
              setText(item.value);
            }}
            style={styles.addNote}></TextInput>

          <Btn
            btnLabel="Cancel Now"
            Press={() => navigation.navigate('CancelBookingUser')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  radioContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    borderColor: '#FF9401',
  },
  selectedRadioInner: {
    height: 13,
    width: 13,
    borderRadius: 30,
    backgroundColor: '#FF9401',
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  addNote: {
    color: 'black',
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 18,
    padding: 15,
    borderRadius: 14,
    height: 200,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },
});

export default CancelRide;
