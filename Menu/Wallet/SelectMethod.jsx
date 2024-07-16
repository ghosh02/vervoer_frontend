import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SelectMethod = ({navigation}) => {
  const handlePress = cardType => {
    navigation.navigate('AddCard', {cardType});
  };
  return (
    <View style={{height: '100%', backgroundColor: '#333'}}>
      <View style={styles.container}>
        <Text style={{fontSize: 20, color: '#000'}}>Select Method</Text>
        <View style={{paddingVertical: 15, width: '90%'}}>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => handlePress('debit')}>
            <Icon name="credit-card" color="#FF9401" size={20} />
            <Text style={styles.text}>Debit Card</Text>
          </TouchableOpacity>
          <View style={{borderWidth: 0.2, borderColor: '#888'}}></View>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => handlePress('credit')}>
            <Icon name="credit-card" color="#FF9401" size={20} />
            <Text style={styles.text}>Credit Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    height: '28%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 20,
    paddingLeft: '12%',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    paddingVertical: 20,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});

export default SelectMethod;
