import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Btn from '../../components/Btn';
import NavMenu from '../../components/NavMenu';

const EndSession = ({navigation}) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleRating = rate => {
    setRating(rate);
  };

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
          <Text style={{color: '#000', fontSize: 18}}>Session Finished</Text>
        </View>

        <Text style={{fontSize: 16, color: '#FF9401'}}>#R12345</Text>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: '15%'}}>
          <View style={styles.imagecontainer}>
            <Image
              source={require('../../assets/success.png')}
              style={{width: 40, height: 50, objectFit: 'contain'}}
            />
          </View>
          <Text style={{fontSize: 30, color: '#FF9401', marginTop: 10}}>
            Done
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#333',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            We hope you have enjoyed our survices
          </Text>
          <Text style={{fontSize: 18, color: '#333'}}>
            Give your review & rating
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                <Icons
                  name="star"
                  size={40}
                  color={star <= rating ? '#FF9401' : '#ccc'}
                  style={styles.star}
                />
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            placeholderTextColor="gray"
            multiline
            placeholder="Write Your Reason...."
            value={text}
            onChange={item => {
              setText(item.value);
            }}
            style={styles.addNote}></TextInput>
          <Btn
            btnLabel="Submit"
            width="90%"
            Press={() => navigation.navigate('LandingPage')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imagecontainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: '#FF9401',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNote: {
    color: 'black',
    width: '90%',
    marginVertical: 30,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 18,
    padding: 15,
    borderRadius: 14,
    height: 200,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },
});

export default EndSession;
