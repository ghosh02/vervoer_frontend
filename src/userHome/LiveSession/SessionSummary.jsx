import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import Btn from '../../components/Btn';

const options = [10, 15, 20];
const RadioButton = ({label, onPress, isSelected}) => {
  return (
    <TouchableOpacity
      style={[styles.tipcontainer, isSelected && styles.selectedRadio]}
      onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 18}}>$ {label}</Text>
    </TouchableOpacity>
  );
};

const SessionSummary = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 18}}>
            Your Session Summary
          </Text>
        </View>
        <Text style={{fontSize: 16, color: '#FF9401'}}>#R12345</Text>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 130}}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <View
            style={{
              width: '90%',
              alignItems: 'center',
              gap: 5,
              paddingVertical: 10,
              borderRadius: 14,
            }}>
            <Text style={{color: '#000', fontSize: 16}}>Your Bill is</Text>
            <Text style={{color: '#FF9401', fontSize: 50}}>$ 1005.00</Text>
            <Text style={{color: '#000', fontSize: 16, marginBottom: 10}}>
              28 MAY 2021 10:30 AM
            </Text>
            <View
              style={{borderBottomWidth: 2, borderColor: '#ccc', width: '70%'}}
            />
          </View>
          <View style={styles.carcontainer}>
            <View style={{flexDirection: 'row', gap: 30}}>
              <View style={{gap: 5}}>
                <Text style={{color: '#000', fontSize: 18}}>BMW S6</Text>
                <Text style={{fontSize: 16, color: '#FF9401'}}>$ 20.00/Hr</Text>
              </View>
              <View style={{gap: 5}}>
                <Text style={styles.text}>sedan</Text>
                <View style={{flexDirection: 'row', gap: 5}}>
                  <Icon name="star" size={18} color="#FF9401" />
                  <Text style={styles.text}>4.2</Text>
                </View>
              </View>
            </View>
            <View style={{width: 130, height: 72}}>
              <Image
                source={require('../../assets/carpic.png')}
                style={{objectFit: 'cover'}}
              />
            </View>
          </View>
          <Text style={{color: '#000', fontSize: 14, marginTop: 20}}>
            Great Car Experience? Consider Giving a Tip
          </Text>
          <View
            style={{
              marginTop: 20,
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {options.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                onPress={() => setSelectedOption(option)}
                isSelected={selectedOption === option}
              />
            ))}
          </View>
        </View>
        <Text
          style={{
            marginLeft: '5%',
            color: '#000',
            fontSize: 16,
            marginVertical: 15,
          }}>
          Payment Summary
        </Text>
        <View style={{paddingHorizontal: '5%', gap: 10}}>
          <View style={styles.pricecontainer}>
            <Text style={styles.text}>Started At</Text>
            <Text style={styles.text}>$ 20.00</Text>
          </View>
          <View style={styles.pricecontainer}>
            <Text style={styles.text}>End At</Text>
            <Text style={styles.text}>$ 1000.00</Text>
          </View>
          <View style={styles.pricecontainer}>
            <Text style={styles.text}>Time Used</Text>
            <Text style={styles.text}>$ 5.00</Text>
          </View>
          <View style={styles.pricecontainer}>
            <Text style={styles.text}>Price Per Hour</Text>
            <Text style={styles.text}>$ 5.00</Text>
          </View>
          <View style={styles.pricecontainer}>
            <Text style={styles.text}>Total Price</Text>
            <Text style={styles.text}>$ 5.00</Text>
          </View>
          {selectedOption !== null ? (
            <View style={styles.pricecontainer}>
              <Text style={styles.text}>Time Used</Text>
              <Text style={styles.text}>${selectedOption}</Text>
            </View>
          ) : (
            ''
          )}
          <View style={styles.pricecontainer}>
            <Text style={styles.text}>Tax</Text>
            <Text style={styles.text}>$ 5.00</Text>
          </View>
          <View style={[styles.pricecontainer, {paddingVertical: 15}]}>
            <Text style={{fontSize: 18, color: '#FF9401'}}>
              Total Payment(*Approx)
            </Text>
            <Text style={{fontSize: 18, color: '#FF9401'}}>$ 1005.00</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#eee',
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Wallet')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            height: 60,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Icons name="wallet" size={32} color="#444" />
            <Text style={{fontSize: 25, color: '#000'}}>Wallet</Text>
            <Text style={{fontSize: 16, color: '#FF9401'}}>($2500.00)</Text>
          </View>
          <Icon name="right" size={25} color="#000" />
        </TouchableOpacity>
        <Btn
          btnLabel="Pay Now"
          Press={() => navigation.navigate('EndSession')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    elevation: 5,
  },
  tipcontainer: {
    width: 100,
    height: 40,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  selectedRadio: {
    backgroundColor: '#FF9401',
  },
  pricecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
});

export default SessionSummary;
