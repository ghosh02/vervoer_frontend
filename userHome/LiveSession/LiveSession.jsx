import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import NavMenu from '../../components/NavMenu';
import Btn from '../../components/Btn';

const LiveSession = ({navigation}) => {
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
          <Text style={{color: '#000', fontSize: 18}}>Live Car Session</Text>
        </View>

        <Text style={{fontSize: 16, color: '#FF9401'}}>#R12345</Text>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
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
        </View>
        <Text
          style={{
            marginLeft: '5%',
            color: '#000',
            fontSize: 18,
            marginVertical: 20,
          }}>
          Journey Details
        </Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.journeyDetail}>
            <Text style={styles.title}>Started At</Text>
            <View style={styles.detail}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../../assets/date.png')}
                />
              </View>
              <Text style={styles.detailText}>26 MAY 2021 10:00 AM</Text>
            </View>
            <Text style={styles.title}>Time Used</Text>
            <View style={styles.detail}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require('../../assets/date.png')}
                />
              </View>
              <View style={styles.time}>
                <View style={styles.time}>
                  <Text style={styles.textnumber}>2</Text>
                  <Text style={styles.textTime}>Days</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.textnumber}>10</Text>
                  <Text style={styles.textTime}>Hr</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.textnumber}>20</Text>
                  <Text style={styles.textTime}>min</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 200,
            backgroundColor: '#fff',
            marginTop: 20,
          }}></View>
        <Text
          style={{
            marginLeft: '5%',
            color: '#000',
            fontSize: 18,
            marginVertical: 20,
          }}>
          Car Owner Information
        </Text>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.owner}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <View style={{gap: 5}}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Jason Anderson
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <Icons name="phone-call" size={16} />
                  <Text style={styles.text}>+1 234567890</Text>
                </View>
              </View>
            </View>
            <Button title="Call" color="green" />
          </View>
        </View>
        <Text
          style={{
            marginLeft: '5%',
            color: '#000',
            fontSize: 18,
            marginVertical: 20,
          }}>
          Car Docoument
        </Text>
        <View
          style={{
            paddingLeft: '5%',
            flexDirection: 'row',
            gap: 5,
            flexGrow: 1,
          }}>
          <Image
            style={styles.docimage}
            source={require('../../assets/cardoc.png')}
          />
          <Image source={require('../../assets/cardoc.png')} />
          {/* <Image source={require('../../assets/cardoc.png')} /> */}
        </View>
        <Text
          style={{
            marginLeft: '5%',
            color: '#000',
            fontSize: 18,
            marginVertical: 20,
          }}>
          Payment Summary
        </Text>
        <View style={{paddingHorizontal: '5%', gap: 8}}>
          <View style={styles.totalPrice}>
            <Text style={styles.priceText}>Price per Hour</Text>
            <Text style={styles.priceText}>$ 20.00</Text>
          </View>
          <View style={styles.totalPrice}>
            <Text style={styles.priceText}>Approx total Price</Text>
            <Text style={styles.priceText}>$ 1000.00</Text>
          </View>
          <View style={styles.totalPrice}>
            <Text style={styles.priceText}>tax</Text>
            <Text style={styles.priceText}>$ 5.00</Text>
          </View>
        </View>
        <View
          style={[
            styles.totalPrice,
            {paddingHorizontal: '5%', paddingVertical: 15},
          ]}>
          <Text style={{fontSize: 18, color: '#FF9401'}}>
            Total Payment(*Approx)
          </Text>
          <Text style={{fontSize: 18, color: '#FF9401'}}>$ 1005.00</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Btn
            btnLabel="Finish Sessiion"
            Press={() => navigation.navigate('SessionSummary')}
          />
        </View>
      </ScrollView>
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
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    elevation: 3,
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  journeyDetail: {
    width: '90%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    elevation: 3,
  },
  imageContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEFE3',
    borderRadius: 10,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  detailText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 16,
    color: '#FF9401',
    marginVertical: 8,
  },
  image: {
    width: 25,
    height: 25,
    objectFit: 'contain',
  },
  textnumber: {
    fontSize: 25,
    color: '#444',
  },
  textTime: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  owner: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#000',
    elevation: 3,
  },
  docimage: {
    width: 160,
    height: 160,
    objectFit: 'cover',
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 16,
    color: '#000',
  },
});

export default LiveSession;
