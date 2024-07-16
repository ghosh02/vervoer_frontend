// screens/HistoryDetail.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';
import NavMenu from '../../components/NavMenu';

const HistoryDetail = ({route}) => {
  const {item} = route.params;
  const getLastFourDigits = cardNumber => {
    const cardNumberStr = cardNumber.toString();
    return cardNumberStr.slice(-4);
  };
  const getTypeColor = type => {
    return type === 'Withdrew' ? 'red' : 'green';
  };
  const getHistoryDetail = type => {
    const {item} = route.params;
    switch (type) {
      case 'Withdrew':
        return (
          <View>
            <View style={styles.history}>
              <Text style={styles.text}>To bank</Text>
              <Text style={styles.detail}>JPMorgan crop & co</Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>Bank Acc No </Text>
              <Text style={styles.detail}>
                XXXX XXXX XXXX {getLastFourDigits(item.cardNumber)}
              </Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>IFSC No</Text>
              <Text style={styles.detail}>SGD123456</Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>Acc Holder Name </Text>
              <Text style={styles.detail}>Jhon Doe</Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>Date & Time</Text>
              <Text style={styles.detail}>{item.time}</Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>TXID</Text>
              <Text style={{color: '#FF9401', fontSize: 14}}>8786780988</Text>
            </View>
          </View>
        );
      case 'Deposited':
        return (
          <View>
            <View style={styles.history}>
              <Text style={styles.text}>Payment Method</Text>
              <Text style={styles.detail}>Credit Card</Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>Card Number </Text>
              <Text style={styles.detail}>
                XXXX XXXX XXXX {getLastFourDigits(item.accNumber)}
                {/* XXXX XXXX XXXX 1234 */}
              </Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>Card Holder Name </Text>
              <Text style={styles.detail}>Jhon Doe</Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>Date & Time</Text>
              <Text style={styles.detail}>{item.time}</Text>
            </View>
            <View style={styles.history}>
              <Text style={styles.text}>TXID</Text>
              <Text style={{color: '#FF9401', fontSize: 14}}>8786780988</Text>
            </View>
          </View>
        );
      default:
        return '';
    }
  };

  const getStatusColor = status => {
    switch (status) {
      case 'Done':
        return 'green';
      case 'Pending':
        return '#FF9401';
      case 'Canceled':
        return 'red';
      default:
        return 'black';
    }
  };

  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <BackBtn />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: 20,
        }}>
        {item.type === 'Withdrew' && <Text style={styles.label}>Withdrew</Text>}
        {item.type === 'Deposited' && (
          <Text style={styles.label}>Deposited</Text>
        )}
        <Text style={{color: getStatusColor(item.status)}}>{item.status} </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.container}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 35,
            }}>
            <Text style={{color: getTypeColor(item.type), fontSize: 30}}>
              $ {item.amount}
            </Text>
          </View>
          {getHistoryDetail(item.type)}
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <Btn btnLabel="Report" width="45%" size={20} bgColor="#888" />
          <Btn btnLabel="Copy TXID" width="45%" size={20} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 20,
    marginLeft: 60,
  },
  container: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 30,
    borderRadius: 12,
  },
  history: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#999',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  detail: {
    color: '#444',
    fontSize: 14,
  },
});

export default HistoryDetail;
