import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import NumberPad from '../../utils/NumberPad';
import Btn from '../../components/Btn';

const DepositMoney = ({navigation, route}) => {
  const {item} = route.params;
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = key => {
    if (key === '⌫') {
      setInputValue(inputValue.slice(0, -1));
    } else if (key === '.') {
      if (!inputValue.includes('.')) {
        setInputValue(inputValue + key);
      }
    } else {
      setInputValue(inputValue + key);
    }
  };
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
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <View style={styles.header}>
        <View style={styles.headerComponent}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 10}}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', fontSize: 20}}>Deposit</Text>
        </View>
        <View>
          <Text style={styles.headertext}>Wallet</Text>
          <Text style={{color: 'black', fontSize: 16}}>$ 2500.00</Text>
        </View>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.inputTextContainer}>
          <Text style={styles.inputText}>$ {inputValue}</Text>
        </View>
      </View>

      <View style={styles.numberSection}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DepositMoney', {item})}
          style={styles.cardContainer}>
          <View style={styles.card}>
            {getCardLogo(item.cardName)}
            <Text style={{color: '#000', fontSize: 16}}>{item.type}</Text>
          </View>
          <View style={styles.card}>
            <Text style={{color: '#000', fontSize: 16}}>
              NBK XXXX {getLastFourDigits(item.cardNumber)}
            </Text>
            <Icons name="chevron-small-right" size={25} color="#FF9401" />
          </View>
        </TouchableOpacity>
        <NumberPad onPress={handleKeyPress} />
        <Btn
          btnLabel="Add Money"
          width="90%"
          Press={() =>
            navigation.navigate('DepositSummary', {item, amount: inputValue})
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerComponent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headertext: {
    color: 'black',
    textAlign: 'right',
    fontSize: 12,
  },
  inputTextContainer: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginVertical: 20,
    borderRadius: 16,
  },
  inputText: {
    color: '#000',
    fontSize: 28,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#dff',
    borderColor: '#666',
    height: 50,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  numberSection: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default DepositMoney;
