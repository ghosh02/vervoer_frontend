// components/AgeToggleButton.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ToggleBtn = () => {
  const [isAdult, setIsAdult] = useState(true);

  const toggleAge = () => {
    setIsAdult(previousState => !previousState);
  };

  return (
    <TouchableOpacity onPress={toggleAge} style={styles.container}>
      <View
        style={[
          styles.option,
          isAdult ? styles.optionSelected : styles.optionUnselected,
        ]}>
        <Text style={styles.text}>Adult</Text>
      </View>
      <View
        style={[
          styles.option,
          !isAdult ? styles.optionSelected : styles.optionUnselected,
        ]}>
        <Text style={styles.text}>Child</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 35,
    shadowColor: '#000',
    elevation: 5,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 35,
  },
  optionSelected: {
    backgroundColor: '#FFEFE3',
  },
  optionUnselected: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 18,
    // fontWeight: 500,
  },
});

export default ToggleBtn;
