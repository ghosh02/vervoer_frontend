import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DepositPayment = () => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  return (
    <View style={styles.container}>
      {numbers.map((number, index) => (
        <TouchableOpacity key={index} style={styles.numberButton}>
          <Text style={styles.numberText}>{number}</Text>
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
    marginVertical: 20,
  },
  numberButton: {
    width: '30%',
    padding: 20,
    margin: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  numberText: {
    fontSize: 24,
    color: '#000',
  },
});

export default DepositPayment;
