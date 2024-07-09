import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import BackBtn from '../../components/BackBtn';
import Navbar from '../../components/Navbar';
import Btn from '../../components/Btn';
import {useNavigation} from '@react-navigation/native';

const CardData = [
  {id: 1, title: "Card Holder's Name", data: 'Jhon Doe'},
  {id: 2, title: 'Card Number', data: '1111 2222 3333 3333'},
  {id: 3, title: 'Expiry Date', data: 'MAY 2025'},
];

const FareCard = () => {
  const [hasCard, setHasCard] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Navbar />
      <BackBtn />
      <Text style={{color: 'black', fontSize: 20, marginLeft: 70}}>
        Fare card
      </Text>
      {hasCard ? (
        <View style={{alignItems: 'center', flex: 1}}>
          <View
            style={{
              alignItems: 'flex-start',
              backgroundColor: '#fff',
              width: '90%',
              padding: 20,
              marginTop: 20,
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                marginBottom: 15,
              }}>
              Fare card Information
            </Text>
            {CardData.map(item => (
              <View key={item.id} style={{marginBottom: 8, gap: 5}}>
                <Text style={{color: 'black', fontSize: 12}}>{item.title}</Text>
                <Text style={{color: 'black', fontSize: 18}}>{item.data}</Text>
              </View>
            ))}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 15,
              marginTop: 20,
            }}>
            <Image
              source={require('../../assets/cardfront.png')}
              style={{width: '40%', height: 120, objectFit: 'cover'}}
            />
            <Image
              source={require('../../assets/cardback.png')}
              style={{width: '40%', height: 120, objectFit: 'cover'}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 15,
              position: 'absolute',
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Btn
              btnLabel="Delete"
              width="45%"
              size={20}
              bgColor="gray"
              Press={() => {
                setHasCard(false);
              }}
            />
            <Btn
              btnLabel="Edit"
              width="45%"
              size={20}
              // Press={() => navigation.navigate('AddCard')}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../assets/farecard.png')} />
          <Text style={{color: 'black', fontSize: 22, paddingTop: 10}}>
            Fare card not found
          </Text>
          <Text style={{color: 'black', fontSize: 16, paddingVertical: 10}}>
            Please add now
          </Text>
          <Btn
            btnLabel="Add now"
            width="40%"
            size={20}
            Press={() => navigation.navigate('AddCard')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default FareCard;

{
  /* <TextInput
style={styles.input}
placeholder="Card Holder's Name"
value={cardHolderName}
onChangeText={setCardHolderName}
/>
<TextInput
style={styles.input}
placeholder="Card Number"
value={cardNumber}
onChangeText={setCardNumber}
keyboardType="numeric"
/>
<TextInput
style={styles.input}
placeholder="Expiry Date (MM/YY)"
value={expiryDate}
onChangeText={handleExpiryDateChange}
keyboardType="numeric"
maxLength={5}
/>

const [cardHolderName, setCardHolderName] = useState('');
const [cardNumber, setCardNumber] = useState('');
const [expiryDate, setExpiryDate] = useState('');

const handleExpiryDateChange = (text) => {
  if (text.length === 2 && !text.includes('/')) {
    setExpiryDate(text + '/');
  } else if (text.length <= 5) {
    setExpiryDate(text);
  }
}; */
}
