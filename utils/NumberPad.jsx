// components/NumericKeypad.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const NumberPad = ({onPress}) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];

  return (
    <View style={styles.container}>
      {keys.map((key, index) => (
        <TouchableOpacity
          key={index}
          style={styles.key}
          onPress={() => onPress(key)}>
          <Text style={styles.keyText}>{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  key: {
    width: '30%',
    margin: 4,
    padding: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  keyText: {
    fontSize: 20,
    color: '#000',
  },
});

export default NumberPad;
