import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const parkingData = [
  {
    id: '1',
    type: 'Garage',
    name: 'Central Shopping Center',
    location: '123,park road, New York',
    distance: 5,
    rating: 4.2,
    price: 5.0,
    contactNumber: '+1 1234567890',
    contactPerson: 'Jhon Doe',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: require('../../assets/driveway.png'),
  },
  {
    id: '2',
    type: 'Lot',
    name: 'Central Shopping Center',
    location: '123,park road, New York',
    distance: 5,
    rating: 4.2,
    price: 5.0,
    contactNumber: '+1 1234567890',
    contactPerson: 'Jhon Doe',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: require('../../assets/driveway.png'),
  },
  {
    id: '3',
    type: 'Driveway',
    name: 'Central Shopping Center',
    location: '123,park road, New York',
    distance: 5,
    rating: 4.2,
    price: 5.0,
    contactNumber: '+1 1234567890',
    contactPerson: 'Jhon Doe',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: require('../../assets/driveway.png'),
  },
  {
    id: '4',
    type: 'Lot',
    name: 'Central Shopping Center',
    location: '123,park road, New York',
    distance: 5,
    rating: 4.2,
    price: 5.0,
    contactNumber: '+1 1234567890',
    contactPerson: 'Jhon Doe',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: require('../../assets/driveway.png'),
  },
  {
    id: '5',
    type: 'Garage',
    name: 'Central Shopping Center',
    location: '123,park road, New York',
    distance: 5,
    rating: 4.2,
    price: 5.0,
    contactNumber: '+1 1234567890',
    contactPerson: 'Jhon Doe',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    image: require('../../assets/garage.png'),
  },
];

const PickParking = ({navigation}) => {
  const [isCar, setIsCar] = useState(true);
  const toggleVehicle = () => {
    setIsCar(previousState => !previousState);
  };
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
        <View
          style={{
            width: 60,
            height: 5,
            backgroundColor: '#ddd',
            borderRadius: 8,
            marginVertical: 10,
          }}
        />
        <TouchableOpacity onPress={toggleVehicle} style={styles.btncontainer}>
          <View
            style={[
              styles.option,
              isCar ? styles.optionSelected : styles.optionUnselected,
            ]}>
            <Image source={require('../../assets/carlogo.png')} />
            <Text style={styles.text}>For Car</Text>
          </View>
          <View
            style={[
              styles.option,
              !isCar ? styles.optionSelected : styles.optionUnselected,
            ]}>
            <Image source={require('../../assets/bike.png')} />
            <Text style={styles.text}>For Bike</Text>
          </View>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View
            style={{
              width: '100%',
              gap: 10,
              marginTop: 30,
              paddingVertical: 15,
            }}>
            {parkingData.map(item => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ParkingDetail', {item})}
                key={item.id}
                style={{
                  alignItems: 'flex-start',
                  width: '100%',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderRadius: 14,
                  gap: 5,
                  backgroundColor: '#eee',
                }}>
                <Text style={styles.text}>
                  {item.name}({item.type})
                </Text>
                <Text style={styles.title}>{item.location}</Text>
                <View
                  style={[
                    styles.detail,
                    {justifyContent: 'space-between', width: '100%'},
                  ]}>
                  <View style={[styles.detail, {gap: 20}]}>
                    <View style={styles.detail}>
                      <Icons name="time-outline" size={25} color="#000" />
                      <Text style={styles.title}>{item.distance}</Text>
                    </View>
                    <View style={styles.detail}>
                      <Icons name="star" size={25} color="#FF9401" />
                      <Text style={styles.title}>{item.rating}</Text>
                    </View>
                  </View>
                  <Text style={{fontSize: 18, color: '#FF9401'}}>
                    $ {item.price}/Hr
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailcontainer: {
    flex: 1,
    maxHeight: 500,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: '#000',
    elevation: 3,
  },
  btncontainer: {
    width: 300,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 35,
    shadowColor: '#000',
    elevation: 5,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionSelected: {
    backgroundColor: '#FFEFE3',
  },
  optionUnselected: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 18,
    // fontWeight: 500,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    color: '#000',
    fontSize: 16,
  },
});

export default PickParking;
