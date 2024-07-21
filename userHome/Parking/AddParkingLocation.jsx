import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import Btn from '../../components/Btn';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';

const AddParkingLocation = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('datetime');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Date & Time');
  const [location, setLocation] = useState('');
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
    let ftime = TempDate.getHours() + ':' + TempDate.getMinutes();
    setText(fdate + '  ' + '&' + '  ' + ftime);
  };
  const showPicker = () => {
    setShow(true);
    setMode(prevMode => (prevMode === 'date' ? 'time' : 'date'));
  };
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);

  const generateItems = maxValue => {
    let items = [];
    for (let i = 0; i <= maxValue; i++) {
      items.push({label: `${i}`, value: i});
    }
    return items;
  };

  const days = generateItems(30);
  const hours = generateItems(23);
  const minutes = generateItems(59);
  return (
    <SafeAreaView style={styles.container}>
      <NavMenu />
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            // backgroundColor: 'red',
          }}></View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            position: 'absolute',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 10, marginLeft: 10}}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <View
            style={{
              position: 'relative',
            }}>
            <Text style={{color: '#000', fontSize: 18}}>Book Parking</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailcontainer}>
        <Text style={styles.text}>Location</Text>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/user.png')}
            />
          </View>
          <TextInput
            placeholder="Location"
            placeholderTextColor="#666"
            style={styles.inputText}
            onChange={() => {
              setLocation(location);
            }}
          />
        </View>
        <TouchableOpacity>
          <Text style={{color: '#FF9401', paddingVertical: 3}}>
            Use curent location
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>When</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={showPicker} style={styles.imageContainer}>
            <Image
              style={styles.inputImage}
              source={require('../../assets/date.png')}
            />
          </TouchableOpacity>
          <Text style={styles.inputText}>{text}</Text>
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
        <Text style={styles.text}>Duration</Text>
        <View style={styles.dropdownContainer}>
          <View style={[styles.imageContainer, {marginRight: 10}]}>
            <Image
              style={styles.inputImage}
              source={require('../../assets/date.png')}
            />
          </View>
          <View style={styles.dropdown}>
            <Dropdown
              data={days}
              labelField="label"
              valueField="value"
              placeholder="0"
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              itemTextStyle={{color: 'black'}}
              value={selectedDay}
              onChange={item => setSelectedDay(item.value)}
              style={styles.dropdownInput}
            />
            <Text style={styles.dropdownLabel}>Days</Text>
          </View>
          <View style={styles.dropdown}>
            <Dropdown
              data={hours}
              labelField="label"
              valueField="value"
              placeholder="0"
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              itemTextStyle={{color: 'black'}}
              value={selectedHour}
              onChange={item => setSelectedHour(item.value)}
              style={styles.dropdownInput}
            />
            <Text style={styles.dropdownLabel}>Hour</Text>
          </View>
          <View style={styles.dropdown}>
            <Dropdown
              data={minutes}
              labelField="label"
              valueField="value"
              placeholder="0"
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              itemTextStyle={{color: 'black'}}
              value={selectedMinute}
              onChange={item => setSelectedMinute(item.value)}
              style={styles.dropdownInput}
            />
            <Text style={styles.dropdownLabel}>Minute</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', paddingTop: 10}}>
          <Btn
            btnLabel="Pick Parking Slot"
            width="90%"
            Press={() => navigation.navigate('PickParking')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailcontainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: '#000',
    elevation: 3,
  },
  textcontainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#888',
    marginVertical: 15,
    paddingBottom: 10,
  },

  text: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
  },
  textInput: {},
  imageContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEFE3',
    borderRadius: 10,
  },
  image: {width: 30, height: 30, objectFit: 'contain'},
  inputContainer: {
    width: '100%',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    gap: 10,
  },
  inputText: {color: '#000', fontSize: 16},

  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  dropdown: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
  },
  dropdownLabel: {
    fontSize: 14,
    marginTop: 15,
    color: '#666',
  },
  dropdownInput: {
    width: 54,
    height: 38,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
  },
});

export default AddParkingLocation;
