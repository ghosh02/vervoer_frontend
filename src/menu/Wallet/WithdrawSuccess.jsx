import React from 'react';
import {StyleSheet, View} from 'react-native';
import PaymentSuccess from '../../utils/PaymentSuccess';

const WithdrawSuccess = ({route}) => {
  const {item, amount} = route.params;
  return (
    <View>
      <PaymentSuccess
        title="Withdraw"
        amount={amount}
        paymentType="Withdrawn"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WithdrawSuccess;
