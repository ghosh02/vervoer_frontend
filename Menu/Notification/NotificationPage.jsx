import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import BackBtn from '../../components/BackBtn';
import NavMenu from '../../components/NavMenu';

const notifications = [
  {
    id: '1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '10:00 AM',
  },
  {
    id: '2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '10:30 AM',
  },
  {
    id: '3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '11:00 AM',
  },
  {
    id: '4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '11:30 AM',
  },
  {
    id: '5',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '12:00 PM',
  },
  {
    id: '6',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '12:00 PM',
  },
  {
    id: '7',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '12:00 PM',
  },
  {
    id: '8',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '12:00 PM',
  },
  {
    id: '9',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '12:00 PM',
  },
  {
    id: '10',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, corporis',
    time: '12:00 PM',
  },
];

const NotificationPage = () => {
  const highlightCount = 3;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <NavMenu />
      <BackBtn />
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          marginLeft: 70,
          marginBottom: 15,
        }}>
        Notifications
      </Text>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {notifications.map((item, index) => (
            <View key={item.id} style={styles.notification}>
              <Text
                style={[
                  styles.notificationText,
                  index < highlightCount ? styles.highlighted : styles.default,
                ]}>
                {item.text}
              </Text>
              <Text
                style={[
                  styles.timeText,
                  index < highlightCount ? styles.highlighted : styles.default,
                ]}>
                {item.time}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notification: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 16,
  },
  timeText: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
  highlighted: {
    color: 'black',
  },
  default: {
    color: 'gray',
  },
});

export default NotificationPage;
