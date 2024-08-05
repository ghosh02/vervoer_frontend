import React from 'react';
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
const history = [
  {
    id: 1,
    image: require('../../assets/economy.png'),
    carName: 'Volkswagen Golf',
    carNumber: 'DLP-1234',
    type: 'Hatchback',
    rating: '4.2',
    sessionId: '#RS1233',
    rideat: '26 MAY 2021, 10:00 AM',
    price: 150,
    tip: 10,
  },
  {
    id: 2,
    image: require('../../assets/economy.png'),
    carName: 'Volkswagen Golf',
    carNumber: 'DLP-1234',
    type: 'Hatchback',
    rating: '4.2',
    sessionId: '#RS1233',
    rideat: '26 MAY 2021, 10:00 AM',
    price: 150,
    tip: 10,
  },
  {
    id: 3,
    image: require('../../assets/economy.png'),
    carName: 'Volkswagen Golf',
    carNumber: 'DLP-1234',
    type: 'Hatchback',
    rating: '4.2',
    sessionId: '#RS1233',
    rideat: '26 MAY 2021, 10:00 AM',
    price: 150,
    tip: 10,
  },
];

const RideHistory = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          paddingLeft: 10,
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrowleft"
            size={30}
            color="#FF9401"
            style={{zIndex: 10}}
          />
        </TouchableOpacity>
        <Text style={{color: '#000', fontSize: 18}}>Ride History</Text>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center', gap: 10}}>
          {history.map(item => (
            <View
              key={item.id}
              style={{
                borderRadius: 16,
                paddingHorizontal: 20,
                paddingVertical: 20,
                backgroundColor: '#fff',
              }}>
              <View
                style={{
                  width: '95%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 0.8,
                  borderColor: '#666',
                  marginBottom: 10,
                }}>
                <Image source={item.image} />

                <View>
                  <Text style={{fontSize: 18, color: '#000'}}>
                    {item.carName}
                  </Text>
                  <Text style={styles.text}>{item.carNumber}</Text>
                </View>
                <View>
                  <Text style={{fontSize: 14, color: '#000'}}>
                    {item.type}{' '}
                  </Text>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Icon name="star" size={18} color="#FF9401" />
                    <Text style={styles.text}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={{gap: 10}}>
                <View style={styles.history}>
                  <Text style={styles.text}>Session ID</Text>
                  <Text style={styles.text}>{item.sessionId}</Text>
                </View>
                <View style={styles.history}>
                  <Text style={styles.text}>Ride At</Text>
                  <Text style={styles.text}>{item.rideat}</Text>
                </View>
                <View style={styles.history}>
                  <Text style={styles.text}>Total Price</Text>
                  <Text style={styles.text}>$ {item.price}</Text>
                </View>
                <View style={styles.history}>
                  <Text style={styles.text}>Tips</Text>
                  <Text style={styles.text}>$ {item.tip}</Text>
                </View>
                <View style={styles.history}>
                  <Text style={styles.text}>Total Payment</Text>
                  <Text style={{fontSize: 16, color: '#FF9401'}}>
                    $ {item.price + item.tip}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  history: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default RideHistory;
