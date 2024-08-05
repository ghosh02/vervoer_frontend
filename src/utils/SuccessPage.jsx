import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Btn from '../components/Btn';
import BackBtn from '../components/BackBtn';
import {useNavigation} from '@react-navigation/native';

const SuccessPage = ({
  headline,
  main,
  title1,
  title2,
  img,
  btnLabel,

  Press,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 10, height: '100%'}}>
      <BackBtn />
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25, color: '#FF9401'}}>{headline}</Text>
        <Image source={img} style={{marginTop: 50}} />
        <Text style={{fontSize: 30, color: 'black'}}>{main}</Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 23,
            color: 'black',
            paddingTop: 20,
          }}>
          {title1}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 23,
            color: 'black',
            paddingBottom: 20,
          }}>
          {title2}
        </Text>
        <Btn
          bgColor="#FF9401"
          textColor="white"
          btnLabel={btnLabel}
          Press={Press}
          style={{paddingTop: 30}}
        />
      </View>
    </View>
  );
};

export default SuccessPage;
