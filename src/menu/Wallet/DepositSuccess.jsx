import React from 'react';
import {StyleSheet, View} from 'react-native';
import PaymentSuccess from '../../utils/PaymentSuccess';

const DepositSuccess = ({route}) => {
  const {item, amount} = route.params;
  return (
    <View>
      <PaymentSuccess title="Deposit" amount={amount} paymentType="Deposited" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DepositSuccess;
