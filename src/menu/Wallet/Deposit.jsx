import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackBtn from '../../components/BackBtn';
import NavMenu from '../../components/NavMenu';

const CardList = [
  {
    id: 1,
    cardName: 'Visa',
    type: 'Debit Card',
    cardNumber: 1233111111112222,
  },
  {
    id: 2,
    cardName: 'Visa',
    type: 'Credit Card',
    cardNumber: 1233111111113333,
  },
];

const getLastFourDigits = cardNumber => {
  const cardNumberStr = cardNumber.toString();
  return cardNumberStr.slice(-4);
};
const getCardLogo = cardName => {
  switch (cardName) {
    case 'Visa':
      return (
        <Image
          source={require('../../assets/VISA-logo.png')}
          style={styles.logo}
        />
      );
    // case 'MasterCard':
    //   return <Image source={MasterCardLogo} style={styles.logo} />;
    // Add more cases for other card types if needed
    default:
      return null;
  }
};
const Deposit = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <BackBtn />
      <Text style={{color: 'black', fontSize: 20, marginLeft: 60}}>
        Payment Method For Deposit
      </Text>
      <View
        style={{alignItems: 'center', width: '100%', flex: 1, marginTop: 30}}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            gap: 20,
            backgroundColor: '#fff',
            borderRadius: 12,
            paddingVertical: 20,
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {CardList.map(item => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DepositMoney', {item})}
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: '#666',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                  height: 35,
                  alignItems: 'center',
                }}>
                {getCardLogo(item.cardName)}
                <Text style={{color: '#000'}}>{item.type}</Text>
              </View>
              <Text style={{color: '#000'}}>
                NBK XXXX {getLastFourDigits(item.cardNumber)}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SelectMethod')}>
            <Text style={{textAlign: 'center', color: '#FF9401', fontSize: 18}}>
              Add Payment Method
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 8,
    objectFit: 'contain',
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1.3,
    borderColor: '#FF9401',
    borderStyle: 'dashed',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Deposit;
