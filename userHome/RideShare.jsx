import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import NavMenu from '../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import ToggleBtn from '../components/ToggleBtn';
import DateTimePicker from '@react-native-community/datetimepicker';
import Btn from '../components/Btn';
const RideShare = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('datetime');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Date & Time');
  const [pickUp, setPickUp] = useState('');
  const [dropOff, setDropOff] = useState('');
  const [person, setPerson] = useState(1);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let TempDate = new Date(currentDate);
    let fdate =
      TempDate.getDate() +
      '/' +
      (TempDate.getMonth() + 1) +
      '/' +
      TempDate.getFullYear();
    let ftime = TempDate.getHours() + '.' + TempDate.getMinutes();
    setText(fdate + '  ' + '&' + '  ' + ftime);
  };
  const showPicker = () => {
    setShow(true);
    setMode(prevMode => (prevMode === 'date' ? 'time' : 'date'));
  };
  return (
    <View>
      <NavMenu />
      <View style={{height: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 10}}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 18}}>Book New RIde</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              width: '90%',
              paddingVertical: 30,
              borderRadius: 16,
              shadowColor: '#000',
              elevation: 3,
            }}>
            <ToggleBtn />
            <View
              style={{alignItems: 'flex-start', width: '90%', marginTop: 30}}>
              <Text style={styles.text}>Pickup Location</Text>
              <View style={styles.inputContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.inputImage}
                    source={require('../assets/user.png')}
                  />
                </View>
                <TextInput
                  placeholder="Enter Pick Up Location"
                  placeholderTextColor="#666"
                  style={styles.inputText}
                  onChange={() => {
                    setPickUp(pickUp);
                  }}
                />
              </View>
              <TouchableOpacity>
                <Text style={{color: '#FF9401'}}>Use curent location</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Drop off Location</Text>
              <View style={styles.inputContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.inputImage}
                    source={require('../assets/location.png')}
                  />
                </View>
                <TextInput
                  placeholder="Enter Drop off Location"
                  placeholderTextColor="#666"
                  style={styles.inputText}
                  onChange={() => {
                    setDropOff(dropOff);
                  }}
                />
              </View>
              <Text style={styles.text}>When</Text>
              <View
                style={[
                  styles.inputContainer,
                  {justifyContent: 'space-between'},
                ]}>
                <TouchableOpacity
                  onPress={showPicker}
                  style={styles.imageContainer}>
                  <Image
                    style={styles.inputImage}
                    source={require('../assets/date.png')}
                  />
                </TouchableOpacity>
                <Text style={[styles.inputText, {width: '70%'}]}>{text}</Text>
                <TouchableOpacity>
                  <Text style={{color: '#FF9401'}}>Now</Text>
                </TouchableOpacity>
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              <Text style={styles.text}>No. of Persons</Text>
              <View style={styles.inputContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.inputImage}
                    source={require('../assets/person.png')}
                  />
                </View>
                <TextInput
                  placeholder="Enter Number of Person"
                  placeholderTextColor="#666"
                  style={styles.inputText}
                  onChange={() => {
                    setPerson(person);
                  }}
                />
              </View>
              <View
                style={{width: '100%', alignItems: 'center', marginTop: 10}}>
                <Btn btnLabel="Apply" width="90%" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    gap: 10,
  },
  inputImage: {width: 25, height: 25, objectFit: 'contain'},
  inputText: {color: '#000', fontSize: 16},
  text: {
    color: '#444',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 10,
  },
  imageContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEFE3',
    borderRadius: 10,
  },
});

export default RideShare;
