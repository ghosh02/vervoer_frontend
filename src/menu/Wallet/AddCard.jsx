import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';
import NavMenu from '../../components/NavMenu';

const AddCard = ({route, navigation}) => {
  const {cardType} = route.params;
  const [cardHolderNmae, setCardHolderNmae] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleExpiryDateChange = text => {
    if (text.length === 2 && expiryDate.length === 1) {
      setExpiryDate(text + '/');
    } else if (text.length === 2 && expiryDate.length === 3) {
      setExpiryDate(text[0]);
    } else if (text.length <= 5) {
      setExpiryDate(text);
    }
  };
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <BackBtn />
      <Text style={styles.title}>
        {cardType === 'debit' ? 'Add Debit Card' : 'Add Credit Card'}
      </Text>
      <View style={{alignItems: 'center', width: '100%', marginTop: 30}}>
        <View
          style={{
            paddingVertical: 20,
            width: '90%',
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            borderRadius: 14,
          }}>
          <Text style={{fontSize: 20, color: '#000', paddingLeft: 10}}>
            {cardType === 'debit'
              ? 'Debit Card Information'
              : 'Credit Card Information'}
          </Text>
          <View style={{alignItems: 'center', paddingVertical: 10}}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholderTextColor="#666"
                style={styles.input}
                placeholder="Card Holder's Name"
                value={cardHolderNmae}
                onChangeText={setCardHolderNmae}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#666"
                placeholder="Card Number"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#666"
                placeholder="Expiry Date (MM/YY)"
                value={expiryDate}
                onChangeText={handleExpiryDateChange}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#666"
                placeholder="CVV"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="numeric"
                secureTextEntry
                maxLength={3}
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

export default AddCard;

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
  },
});
