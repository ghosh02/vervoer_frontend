import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavMenu from '../../components/NavMenu';
import BackBtn from '../../components/BackBtn';
import Btn from '../../components/Btn';

const WithdrawSummary = ({navigation, route}) => {
  const {item, amount} = route.params;
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <BackBtn />
      <Text style={{color: 'black', fontSize: 20, marginLeft: 50}}>
        Withdraw summary
      </Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.summaryContainer}>
          <Text style={{color: '#000', fontSize: 30, padding: 25}}>
            $ {amount}
          </Text>
          <View>
            <View style={styles.content}>
              <Text style={styles.text}>To Bank</Text>
              <Text style={styles.sidetext}>{item.BankName}</Text>
            </View>
            <View
              style={[
                styles.content,
                {borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#666'},
              ]}>
              <Text style={styles.text}>Account Number</Text>
              <Text style={styles.sidetext}>{item.AccouuntNumber}</Text>
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
          btnLabel="Withdraw Money"
          width="90%"
          Press={() => navigation.navigate('WithdrawSuccess', {item, amount})}
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

    // justifyContent: 'center',
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

export default WithdrawSummary;
