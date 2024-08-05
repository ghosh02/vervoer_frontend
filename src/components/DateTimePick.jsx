import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePick = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('datetime');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

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
    setText(fdate + ftime);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showPicker = () => {
    setShow(true);
    setMode(prevMode => (prevMode === 'date' ? 'time' : 'date'));
  };
  const setCurrentDateTime = () => {
    setText(new Date());
  };

  return (
    <View>
      <View>
        <Button onPress={showPicker} title="Show date picker!" />
      </View>
      <View>
        {/* <Button onPress={setCurrentDateTime} title="Show time picker!" /> */}
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
      <Text>Selected Date: {text}</Text>
    </View>
  );
};

export default DateTimePick;
