import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import VideoCall from '../../utils/VideoCall';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';
// import VideoCall from './VideoCall';

const {width, height} = Dimensions.get('window');

const RideShareVideo = ({navigation}) => {
  const [showVideoCall, setShowVideoCall] = useState(true);
  const [showCross, setShowCross] = useState(false);

  const handleClose = () => {
    setShowVideoCall(false);
  };

  const handleDragStart = () => {
    setShowCross(true);
  };

  const handleDragEnd = () => {
    setShowCross(false);
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
              width: '80%',
            }}>
            <Text style={{color: '#000', fontSize: 18}}>Video Share</Text>
            <View style={{position: 'absolute', bottom: -20, width: '100%'}}>
              <Text
                style={{
                  color: '#FF9401',
                  fontSize: 14,
                }}>
                #RS1234
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.detailcontainer}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: 60,
              height: 5,
              backgroundColor: '#ddd',
              borderRadius: 8,
              marginTop: 15,
            }}
          />
        </View>
        <View style={{alignItems: 'flex-start', paddingVertical: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <View style={[styles.roundContainer, {borderColor: 'green'}]}>
              <View style={[styles.round, {backgroundColor: 'green'}]} />
            </View>
            <View
              style={{
                position: 'relative',
                flexDirection: 'row',
              }}>
              <Text style={styles.text}>Pick Up</Text>
              <View style={{position: 'absolute', bottom: -20, left: -40}}>
                <Text style={[styles.title]}>123,Link Road,New York</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: 1,
              height: 40,
              backgroundColor: '#999',
              marginLeft: 10,
              marginVertical: 5,
            }}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <View style={[styles.roundContainer, , {borderColor: 'red'}]}>
              <View style={[styles.round, {backgroundColor: 'red'}]} />
            </View>
            <View
              style={{
                position: 'relative',
                flexDirection: 'row',
              }}>
              <Text style={styles.text}>Drop Off</Text>
              <View style={{position: 'absolute', bottom: -20, left: -40}}>
                <Text style={[styles.title]}>123,Link Road,New York</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20,
          }}>
          <View style={styles.detail}>
            <Image source={require('../../assets/location.png')} />
            <Text style={styles.detailText}>30 miles</Text>
          </View>
          <View style={styles.detail}>
            <Image source={require('../../assets/livesession.png')} />
            <Text style={styles.detailText}>50 min</Text>
          </View>
          <Text style={{fontSize: 16, color: '#FF9401'}}>$ 30.20</Text>
        </View>
      </View>

      {showVideoCall && (
        <VideoCall
          onClose={handleClose}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      )}
      {showCross && (
        <View style={styles.crossContainer}>
          <Icon name="close" size={30} color="#000" style={{zIndex: 10}} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  crossContainer: {
    position: 'absolute',
    bottom: 50,
    left: width / 2 - 30,
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    zIndex: 100,
  },
  detailcontainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowColor: '#000',
    elevation: 3,
  },
  roundContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  round: {
    width: 12,
    height: 12,
    borderRadius: 12,
  },
  title: {marginLeft: 40, color: '#777', fontSize: 12},
  text: {
    fontSize: 14,
    color: '#000',
  },
  detail: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  detailText: {
    fontSize: 16,
    color: '#000',
  },
});

export default RideShareVideo;
