import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackBtn from '../../components/BackBtn';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign';
import Btn from '../../components/Btn';
import {
  launchImageLibrary as _launchImageLibrary,
  launchCamera as _launchCamera,
} from 'react-native-image-picker';
import NavMenu from '../../components/NavMenu';

const AddFairCard = () => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  let launchImageLibrary = _launchImageLibrary;
  let launchCamera = _launchCamera;

  const [selectedFrontImage, setSelectedFrontImage] = useState(null);
  const [selectedBackImage, setSelectedBackImage] = useState(null);

  const handleCameraLaunch = side => {
    const options = {
      quality: 1,
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 300,
      maxWidth: 200,
    };

    launchCamera(options, response => handleResponse(response, side));
  };

  const handleResponse = (response, side) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      if (side === 'front') {
        setSelectedFrontImage(imageUri);
      } else {
        setSelectedBackImage(imageUri);
      }
    }
  };

  const handleExpiryDateChange = text => {
    if (text.length === 2 && expiryDate.length === 1) {
      setExpiryDate(text + '/');
    } else if (text.length === 2 && expiryDate.length === 3) {
      setExpiryDate(text[0]);
    } else if (text.length <= 5) {
      setExpiryDate(text);
    }
  };
  const formatCardNumber = text => {
    const cleaned = text.replace(/\s+/g, ''); // Remove all spaces
    if (cleaned.length <= 19) {
      const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || ''; // Group digits by 4 and join with spaces
      setCardNumber(formatted);
    }
  };
  return (
    <View style={{flex: 1}}>
      <NavMenu />
      <BackBtn />
      <Text style={{color: 'black', fontSize: 20, marginLeft: 70}}>
        Add Fare card
      </Text>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            width: '90%',
            alignItems: 'flex-start',
            gap: 10,
            backgroundColor: 'white',
            paddingVertical: 20,
            paddingHorizontal: 10,
            borderRadius: 16,
            marginTop: 20,
            flex: 1,
          }}>
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Card Holder's Name"
            value={cardHolderName}
            onChangeText={data => {
              setCardHolderName(data);
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Card Number"
            maxLength={19}
            value={cardNumber}
            onChangeText={formatCardNumber}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={handleExpiryDateChange}
            keyboardType="numeric"
            maxLength={5}
          />
        </View>
        <View
          style={{
            width: '90%',
            height: 220,
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 16,
          }}>
          <View style={styles.retake}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                paddingLeft: 20,
                paddingVertical: 10,
              }}>
              Front Side
            </Text>
            {selectedFrontImage !== null ? (
              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.touchableIcon}
                  onPress={() => {
                    handleCameraLaunch('front');
                  }}>
                  <Icon name="camera" size={25} color="#FF9401" />
                  <Text style={{fontSize: 14, color: '#444'}}>Retake</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}
                  onPress={() => {
                    setSelectedFrontImage(null);
                  }}>
                  <Icons name="delete" size={25} color="red" />
                  <Text style={{fontSize: 14, color: '#444'}}>Delete</Text>
                </TouchableOpacity>
              </View>
            ) : (
              ''
            )}
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            {selectedFrontImage === null ? (
              <TouchableOpacity
                style={styles.camera}
                onPress={() => {
                  handleCameraLaunch('front');
                }}>
                <Icon name="camera" size={30} color="#FF9401" />
                <Text style={{color: 'gray'}}>Scan Front Side</Text>
              </TouchableOpacity>
            ) : (
              <View style={{width: '90%', height: '85%'}}>
                <Image
                  style={{objectFit: 'cover', height: '100%', width: '100%'}}
                  source={{uri: selectedFrontImage}}
                />
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            width: '90%',
            height: 220,
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 16,
            flex: 1,
          }}>
          <View style={styles.retake}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                paddingLeft: 20,
                paddingVertical: 10,
              }}>
              Back Side
            </Text>
            {selectedBackImage !== null ? (
              <View style={styles.iconSection}>
                <TouchableOpacity
                  style={styles.touchableIcon}
                  onPress={() => {
                    handleCameraLaunch('back');
                  }}>
                  <Icon name="camera" size={25} color="#FF9401" />
                  <Text style={{fontSize: 14, color: '#444'}}>Retake</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchableIcon}
                  onPress={() => {
                    setSelectedBackImage(null);
                  }}>
                  <Icons name="delete" size={25} color="red" />
                  <Text style={{fontSize: 14, color: '#444'}}>Delete</Text>
                </TouchableOpacity>
              </View>
            ) : (
              ''
            )}
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            {selectedBackImage === null ? (
              <TouchableOpacity
                style={styles.camera}
                onPress={() => {
                  handleCameraLaunch('back');
                }}>
                <Icon name="camera" size={30} color="#FF9401" />
                <Text style={{color: 'gray'}}>Scan Back Side</Text>
              </TouchableOpacity>
            ) : (
              <View style={{width: '90%', height: '85%'}}>
                <Image
                  style={{objectFit: 'cover', height: '100%', width: '100%'}}
                  source={{uri: selectedBackImage}}
                />
              </View>
            )}
          </View>
        </View>
        <Btn width="85%" btnLabel="Save Card" size={18} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#000',
    width: '100%',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '85%',
    borderWidth: 2,
    borderColor: 'gray',
    borderStyle: 'dotted',
    borderRadius: 10,
  },
  retake: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    paddingRight: 20,
  },
  touchableIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default AddFairCard;
