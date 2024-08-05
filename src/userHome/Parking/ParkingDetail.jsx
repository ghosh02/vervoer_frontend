import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import NavMenu from '../../components/NavMenu';
import Btn from '../../components/Btn';

const getIconType = type => {
  switch (type) {
    case 'Garage':
      return (
        <View style={styles.getIcon}>
          <Text style={{fontSize: 20, color: '#fff', fontWeight: '800'}}>
            G
          </Text>
        </View>
      );
    case 'Lot':
      return (
        <View style={styles.getIcon}>
          <Text style={{fontSize: 20, color: '#fff', fontWeight: '800'}}>
            L
          </Text>
        </View>
      );
    case 'Driveway':
      return (
        <View style={styles.getIcon}>
          <Text style={{fontSize: 20, color: '#fff', fontWeight: '800'}}>
            D
          </Text>
        </View>
      );
    default:
      '';
  }
};

const ParkingDetail = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginLeft: 10,
        }}>
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
        <Text style={{color: '#000', fontSize: 20}}>Parking Details</Text>
      </View>
      <ScrollView
        contentContainerStyle={{marginTop: 20}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={item.image}
            style={{
              width: 335,
              height: 170,
              objectFit: 'cover',
              borderRadius: 20,
            }}
          />
          <View
            style={{
              alignItems: 'center',
              width: '90%',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 14,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              marginVertical: 20,
            }}>
            <View>{getIconType(item.type)}</View>
            <View style={{gap: 5}}>
              <Text style={styles.text}>
                {item.name}({item.type})
              </Text>
              <Text style={styles.title}>{item.location}</Text>
              <View style={[styles.detail, {justifyContent: 'space-between'}]}>
                <View style={[styles.detail, {gap: 20}]}>
                  <View style={styles.detail}>
                    <Icons name="time-outline" size={20} color="#000" />
                    <Text style={styles.title}>{item.distance}</Text>
                  </View>
                  <View style={styles.detail}>
                    <Icons name="star" size={18} color="#FF9401" />
                    <Text style={styles.title}>{item.rating}</Text>
                  </View>
                </View>
                <Text style={{fontSize: 18, color: '#FF9401'}}>
                  $ {item.price}/Hr
                </Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'flex-start', width: '90%'}}>
            <Text style={styles.text}>Parking Info</Text>
            <View
              style={{
                width: '100%',
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 14,
                marginVertical: 10,
              }}>
              <Text style={styles.text}>About:</Text>
              <Text style={styles.title}>{item.about}</Text>
            </View>
            <Text style={styles.text}>Contact Info</Text>
            <View style={styles.boxcontent}>
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
                  <Icons name="call-outline" size={16} />
                  <Text style={styles.title}>+1 234567890</Text>
                </View>
              </View>
              <Button title="Call Driver" color="green" />
            </View>
            <View style={styles.boxcontent}>
              <View>
                <Text style={styles.title}>Price per Hour</Text>
                <Text style={{color: '#FF9401', fontSize: 20}}>
                  $ {item.price}
                </Text>
              </View>
              <Btn
                btnLabel="Book Now"
                width="40%"
                size={18}
                Press={() => navigation.navigate('ParkingSlot')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 16,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    color: '#666',
    fontSize: 15,
  },
  getIcon: {
    height: 30,
    width: 30,
    backgroundColor: '#FF9401',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  boxcontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
  },
});

export default ParkingDetail;
