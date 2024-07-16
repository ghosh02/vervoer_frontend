import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import NavMenu from '../components/NavMenu';
import BackBtn from '../components/BackBtn';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';

const PaymentSuccess = ({title, paymentType, amount}) => {
  const navigation = useNavigation();
  return (
    <View style={{height: '100%'}}>
      <NavMenu />
      <BackBtn />
      <Text style={{color: 'black', fontSize: 20, marginLeft: 50}}>
        {title} success
      </Text>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image source={require('../assets/success.png')} />
        </View>
        <Text style={{fontSize: 25, color: '#FF9401', paddingVertical: 5}}>
          Done
        </Text>
        <Text style={{fontSize: 30, color: '#000', paddingVertical: 5}}>
          ${amount}
        </Text>
        <Text style={{fontSize: 20, color: '#555', paddingVertical: 5}}>
          Money has been {paymentType}
        </Text>
        <Text style={{fontSize: 20, color: '#555'}}>successfully</Text>
        <Text style={{fontSize: 20, color: '#000', paddingVertical: 5}}>
          Transition ID:{' '}
          <Text style={{fontSize: 20, color: '#FF9401'}}>#990373636474</Text>
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          bottom: 10,
        }}>
        <Btn
          btnLabel="Go to Wallet"
          Press={() => navigation.navigate('Wallet')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '25%',
  },
  imagecontainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#FF9401',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default PaymentSuccess;
