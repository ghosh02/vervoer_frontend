import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ChangeCard = ({route}) => {
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
  const {item} = route.params;
  return (
    <View style={{height: '100%', backgroundColor: '#333'}}>
      <View style={styles.container}>
        <TouchableOpacity
          //   onPress={() => navigation.navigate('ChangeCard', {item})}
          style={styles.cardContainer}>
          <View style={styles.card}>
            {getCardLogo(i.cardName)}
            <Text style={{color: '#000', fontSize: 16}}>{i.type}</Text>
          </View>
          <View style={styles.card}>
            <Text style={{color: '#000', fontSize: 16}}>
              NBK XXXX {getLastFourDigits(i.cardNumber)}
            </Text>
            {/* <Icons name="chevron-small-right" size={25} color="#FF9401" /> */}
          </View>
        </TouchableOpacity>
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
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    height: 35,
    alignItems: 'center',
  },
});

export default ChangeCard;
