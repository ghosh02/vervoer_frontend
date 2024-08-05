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
import Icon from 'react-native-vector-icons/FontAwesome';
import NavMenu from '../../components/NavMenu';

const CardList = [
  {
    id: 1,
    BankName: 'Bank of America Crop',
    AccouuntNumber: 1233111111112345,
  },
  {
    id: 2,
    BankName: 'JP Morgan Chase & co',
    AccouuntNumber: 1233111111116789,
  },
];

const getLastFourDigits = cardNumber => {
  const cardNumberStr = cardNumber.toString();
  return cardNumberStr.slice(-4);
};

const Withdraw = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <BackBtn />
      <Text style={{color: 'black', fontSize: 20, marginLeft: 60}}>
        Payment Method For Withdrawl
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
              onPress={() => navigation.navigate('WithdrawMoney', {item})}
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
                <Icon name="bank" color="#FF9401" size={16} />
                <Text style={{color: '#000', fontSize: 18}}>
                  {item.BankName}
                </Text>
              </View>
              <Text style={{color: '#000'}}>
                XXXX {getLastFourDigits(item.AccouuntNumber)}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('AddBank')}>
            <Text style={{textAlign: 'center', color: '#FF9401', fontSize: 18}}>
              Add Bank Account
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Withdraw;
