import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';
import {useNavigation} from '@react-navigation/native';
import NavMenu from '../../components/NavMenu';

const history = [
  {
    id: '1',
    type: 'Withdrew',
    amount: 1200,
    time: '21 Apr 2021 ,10:15:30',
    status: 'Done',
    cardNumber: 1111222233334444,
  },
  {
    id: '2',
    type: 'Deposited',
    amount: 1200,
    time: '21 Apr 2021 ,10:15:30',
    status: 'Pending',
    accNumber: 1111222233334444,
  },
  {
    id: '3',
    type: 'Withdrew',
    amount: 1200,
    time: '21 Apr 2021 ,10:15:30',
    status: 'Done',
    accNumber: 1111222233334444,
  },
  {
    id: '4',
    type: 'Deposited',
    amount: 1200.88,
    time: '21 Apr 2021 ,10:15:30',
    status: 'Done',
    cardNumber: 1111222233334444,
  },
  {
    id: '5',
    type: 'Withdrew',
    amount: 1200,
    time: '21 Apr 2021 ,10:15:30',
    status: 'Canceled',
    accNumber: 1111222233334444,
  },
  {
    id: '6',
    type: 'Deposited',
    amount: 1200,
    time: '21 Apr 2021 ,10:15:30',
    status: 'Done',
    cardNumber: 1111222233334444,
  },
  {
    id: '7',
    type: 'Withdrew',
    amount: 1200,
    time: '21 Apr 2021 ,10:15:30',
    status: 'Done',
    accNumber: 1111222233334444,
  },
  {
    id: '8',
    type: 'Deposited',
    amount: 1200,
    time: '21 Apr 2021 ,10:15:30',
    status: 'Canceled',
    cardNumber: 1111222233334444,
  },
];
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
const formatAmount = (type, amount) => {
  return type === 'Withdrew' ? `-$${amount}` : `+$${amount}`;
};
const getTypeColor = type => {
  return type === 'Withdrew' ? 'red' : 'green';
};

const Wallet = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <BackBtn />
      <Text style={{color: 'black', fontSize: 20, marginLeft: 60}}>Wallet</Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.amountContainer}>
          <Text style={{color: '#000', fontSize: 25}}>$ 2500.00</Text>
        </View>
        <View style={styles.btnContainer}>
          <Btn
            btnLabel="Deposit"
            width="45%"
            size={20}
            bgColor="gray"
            Press={() => navigation.navigate('Deposit')}
          />
          <Btn
            btnLabel="Withdraw"
            width="45%"
            size={20}
            Press={() => navigation.navigate('Withdraw')}
          />
        </View>
      </View>
      <View style={styles.historyContainer}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            paddingLeft: '5%',
            marginBottom: 10,
          }}>
          History
        </Text>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              width: '100%',
              gap: 10,
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {history.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.history}
                onPress={() => navigation.navigate('HistoryDetail', {item})}>
                <View style={styles.item}>
                  <Text style={{color: '#000', fontSize: 16}}>{item.type}</Text>
                  <Text style={{color: getTypeColor(item.type)}}>
                    {formatAmount(item.type, item.amount)}
                  </Text>
                </View>
                <View style={styles.item}>
                  <Text style={{color: '#666', fontSize: 12}}>{item.time}</Text>
                  <Text style={{color: getStatusColor(item.status)}}>
                    {item.status}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amountContainer: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginTop: 20,
    shadowColor: '#000',
    elevation: 5,
  },
  btnContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  historyContainer: {
    flex: 1,
  },
  history: {
    width: '90%',
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default Wallet;
