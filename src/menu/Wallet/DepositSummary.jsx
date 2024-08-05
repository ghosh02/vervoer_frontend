import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavMenu from '../../components/NavMenu';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';

const DepositSummary = ({navigation, route}) => {
  const getLastFourDigits = cardNumber => {
    const cardNumberStr = cardNumber.toString();
    return cardNumberStr.slice(-4);
  };
  const {item, amount} = route.params;
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <BackBtn />
      <Text style={{color: 'black', fontSize: 20, marginLeft: 50}}>
        Deposit summary
      </Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.summaryContainer}>
          <Text style={{color: '#000', fontSize: 30, padding: 25}}>
            $ {amount}
          </Text>
          <View>
            <View style={styles.content}>
              <Text style={styles.text}>Payment Method</Text>
              <Text style={styles.sidetext}>{item.type}</Text>
            </View>
            <View
              style={[
                styles.content,
                {borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#666'},
              ]}>
              <Text style={styles.text}>Card Number</Text>
              <Text style={styles.sidetext}>
                XXXX XXXX XXXX {getLastFourDigits(item.cardNumber)}
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Acc Holder's Name</Text>
              <Text style={styles.sidetext}>Jhon Doe</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          bottom: 10,
          width: '100%',
        }}>
        <Btn
          btnLabel="Add Money Now"
          width="90%"
          Press={() => navigation.navigate('DepositSuccess', {item, amount})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 32,
    alignItems: 'center',
    padding: 5,
    borderRadius: 16,
  },
  content: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  sidetext: {
    color: '#555',
    fontSize: 16,
  },
});

export default DepositSummary;
