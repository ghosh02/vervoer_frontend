import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import Btn from '../../components/Btn';

const BookParking = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavMenu />
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            width: '100%',
            // backgroundColor: 'red',
          }}></View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            position: 'absolute',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{zIndex: 10, marginLeft: 10}}>
            <Icon
              name="arrowleft"
              size={30}
              color="#FF9401"
              style={{zIndex: 10}}
            />
          </TouchableOpacity>
          <View
            style={{
              position: 'relative',
            }}>
            <Text style={{color: '#000', fontSize: 18}}>Book Parking</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailcontainer}>
        <Text style={styles.text}>Location</Text>
        <View style={styles.textcontainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/user.png')}
              style={styles.image}
            />
          </View>
          {/* <TextInput /> */}
          <Text style={styles.text}>Change Location</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Btn
            btnLabel="Apply"
            width="90%"
            Press={() => navigation.navigate('AddParkingLocation')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailcontainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: '#000',
    elevation: 3,
  },
  textcontainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#888',
    marginVertical: 15,
    paddingBottom: 10,
  },

  text: {
    fontSize: 18,
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
  image: {width: 30, height: 30, objectFit: 'contain'},
});

export default BookParking;
