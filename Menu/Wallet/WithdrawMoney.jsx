import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavMenu from '../../components/NavMenu';
import Icons from 'react-native-vector-icons/Entypo';
import Ico from 'react-native-vector-icons/AntDesign';
import NumberPad from '../../utils/NumberPad';
import Btn from '../../components/Btn';

const WithdrawMoney = ({navigation, route}) => {
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
  const getLastFourDigits = accNumber => {
    const accNumberStr = accNumber.toString();
    return accNumberStr.slice(-4);
  };
  const {item} = route.params;
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <View style={styles.header}>
        <View style={styles.headerComponent}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 10}}>
            <Ico
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', fontSize: 20}}>Withdraw</Text>
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
          // onPress={() => navigation.navigate('DepositMoney', {item})}
          style={styles.cardContainer}>
          <View style={styles.card}>
            <Icon name="bank" color="#FF9401" size={16} />
            <Text style={{color: '#000', fontSize: 16}}>{item.BankName}</Text>
          </View>
          <View style={styles.card}>
            <Text style={{color: '#000', fontSize: 16}}>
              XXXX {getLastFourDigits(item.AccouuntNumber)}
            </Text>
            <Icons name="chevron-small-right" size={25} color="#FF9401" />
          </View>
        </TouchableOpacity>
        <NumberPad onPress={handleKeyPress} />
        <Btn
          btnLabel="Withdraw Money"
          width="90%"
          Press={() =>
            navigation.navigate('WithdrawSummary', {item, amount: inputValue})
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
    height: 35,
    alignItems: 'center',
  },
  numberSection: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default WithdrawMoney;
