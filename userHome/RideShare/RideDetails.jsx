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
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Feather';
import Ico from 'react-native-vector-icons/Entypo';
import Btn from '../../components/Btn';

const RideDetails = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <View style={{height: '35%'}}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{zIndex: 10}}>
              <Icon
                name="arrowleft"
                size={30}
                color="#FF9401"
                style={{zIndex: 10}}
              />
            </TouchableOpacity>
            <Text style={{color: '#000', fontSize: 18}}>Ride Details</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RideShareVideo')}
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#FF9401',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Image
                style={{objectFit: 'contain', width: 15, height: 15}}
                source={require('../../assets/video.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 16, color: '#FF9401'}}>#R12345</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{width: '100%'}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.carDetail}>
              <Image source={require('../../assets/economy.png')} />
              <View style={{gap: 5}}>
                <Text style={{color: '#000', fontSize: 16}}>
                  Volokswagen Golf
                </Text>
                <Text style={styles.text}>DLP-3456</Text>
              </View>
              <View style={{gap: 5}}>
                <Text style={{color: '#000', fontSize: 14, textAlign: 'right'}}>
                  Hatchback
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text}>OTP : </Text>
                  <Text style={{color: '#FF9401', fontSize: 14}}>2345</Text>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              marginLeft: '4%',
              paddingVertical: 10,
              color: '#000',
            }}>
            Driver Details
          </Text>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.carDetail}>
              <View style={{flexDirection: 'row', gap: 15}}>
                <Image
                  source={require('../../assets/profile.jpg')}
                  style={{width: 50, height: 50, borderRadius: 100}}
                />
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
              <Button title="Call Driver" color="green" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '4%',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 18, color: '#000'}}>Journey Details</Text>
            <TouchableOpacity style={{flexDirection: 'row', gap: 5}}>
              <Text style={{fontSize: 14, color: '#000'}}>Fwd Trip</Text>
              <Ico name="forward" size={25} />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: '90%',
                backgroundColor: '#fff',
                paddingLeft: 30,
                paddingVertical: 15,
                borderRadius: 14,
              }}>
              <Text style={{color: '#FF9401', marginVertical: 10}}>
                Pick Up Location
              </Text>
              <View style={styles.journey}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.inputImage}
                    source={require('../../assets/user.png')}
                  />
                </View>
                <Text style={styles.title}>52,Sector 5, Atlanta</Text>
              </View>
              <Text style={{color: '#FF9401', marginVertical: 10}}>
                Drop off Location
              </Text>
              <View style={styles.journey}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.inputImage}
                    source={require('../../assets/location.png')}
                  />
                </View>
                <Text style={styles.title}>52,Sector 5, New York</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <Btn
              btnLabel="Cancel Booking"
              bgColor="#666"
              Press={() => navigation.navigate('CancelRide')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#000',
  },
  carDetail: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#000',
    elevation: 3,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  imageContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEFE3',
    borderRadius: 10,
  },
  inputImage: {width: 25, height: 25, objectFit: 'contain'},
  journey: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});

export default RideDetails;
