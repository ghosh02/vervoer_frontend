import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import NavMenu from '../../components/NavMenu';
import Icon from 'react-native-vector-icons/AntDesign';

const fetchParkingSlotsFromDatabase = () => {
  return [
    {id: 1, section: 'A', booked: false, bookedBy: null, floor: 'First'},
    {id: 2, section: 'A', booked: true, bookedBy: null, floor: 'First'},
    {id: 3, section: 'A', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 4, section: 'A', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 5, section: 'A', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 6, section: 'A', booked: false, bookedBy: null, floor: 'First'},
    {id: 7, section: 'A', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 8, section: 'A', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 9, section: 'A', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 10, section: 'B', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 11, section: 'B', booked: false, bookedBy: null, floor: 'First'},
    {id: 12, section: 'B', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 13, section: 'B', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 14, section: 'B', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 15, section: 'B', booked: true, bookedBy: 'user2', floor: 'First'},
    {id: 16, section: 'B', booked: false, bookedBy: null, floor: 'Second'},
    {id: 17, section: 'B', booked: true, bookedBy: 'user3', floor: 'Second'},
    {id: 18, section: 'B', booked: false, bookedBy: null, floor: 'Third'},
    {id: 19, section: 'B', booked: false, bookedBy: null, floor: 'Third'},
    {id: 20, section: 'B', booked: false, bookedBy: null, floor: 'First'},
  ];
};

const ParkingSlot = () => {
  const [parkingSlots, setParkingSlots] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [currentFloor, setCurrentFloor] = useState('First');
  const currentUser = 'user1'; // This represents the current user

  useEffect(() => {
    const slots = fetchParkingSlotsFromDatabase();
    setParkingSlots(slots);
  }, []);

  const handleSlotPress = slotId => {
    const slot = parkingSlots.find(s => s.id === slotId);

    if (slot.booked && slot.bookedBy !== currentUser) {
      Alert.alert('This slot is already booked by another user.');
      return;
    }

    if (selectedSlots.includes(slotId)) {
      setSelectedSlots(selectedSlots.filter(id => id !== slotId));
      setParkingSlots(
        parkingSlots.map(slot =>
          slot.id === slotId ? {...slot, booked: false, bookedBy: null} : slot,
        ),
      );
    } else {
      if (selectedSlots.length < 3) {
        setSelectedSlots([...selectedSlots, slotId]);
        setParkingSlots(
          parkingSlots.map(slot =>
            slot.id === slotId
              ? {...slot, booked: true, bookedBy: currentUser}
              : slot,
          ),
        );
      } else {
        Alert.alert(
          'You can only select up to 3 slots. Please unselect a slot first.',
        );
      }
    }
  };

  const handleFloorChange = floor => {
    setCurrentFloor(floor);
  };
  const sections = ['A', 'B'];

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
        <Text style={{color: '#000', fontSize: 20}}>
          Available Parking Sapce
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.floorButtonsContainer}>
          {['First', 'Second', 'Third'].map(floor => (
            <TouchableOpacity
              key={floor}
              style={[
                styles.floorButton,
                currentFloor === floor && styles.selectedFloorButton,
              ]}
              onPress={() => handleFloorChange(floor)}>
              <Text style={styles.floorButtonText}>{floor} Floor</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView>
        <View style={styles.slotsContainer}>
          {sections.map(section => (
            <View key={section} style={styles.section}>
              <Text style={styles.sectionTitle}> {section}</Text>
              {parkingSlots
                .filter(
                  slot =>
                    slot.floor === currentFloor && slot.section === section,
                )
                .map(slot => (
                  <TouchableOpacity
                    key={slot.id}
                    style={[
                      styles.slot,
                      slot.id % 2 === 0 ? styles.evenSlot : styles.oddSlot,
                    ]}
                    onPress={() => handleSlotPress(slot.id)}>
                    {slot.booked ? (
                      slot.bookedBy === currentUser ? (
                        <View
                          style={{
                            backgroundColor: '#FF9401',
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text style={{color: '#fff', fontSize: 20}}>
                            Selected
                          </Text>
                        </View>
                      ) : (
                        <Image
                          source={require('../../assets/parkingcar.png')}
                          style={styles.carImage}
                        />
                      )
                    ) : (
                      <Text style={styles.slotNumber}>{slot.id}</Text>
                    )}
                  </TouchableOpacity>
                ))}
              {section !== sections[sections.length - 1] && (
                <View style={styles.dottedLine}></View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  floorButtonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  floorButton: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  selectedFloorButton: {
    backgroundColor: '#aaa',
  },
  floorButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginLeft: 30,
    marginTop: 20,
    borderLeftWidth: 2,
    borderStyle: 'dashed',
  },
  slot: {
    width: '45%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#777',
  },
  evenSlot: {
    borderLeftWidth: 1,
  },
  oddSlot: {
    // borderLeftWidth: 1,
  },
  slotNumber: {
    fontSize: 20,
    color: '#444',
  },
  carImage: {
    width: 90,
    height: 50,
    objectFit: 'contain',
  },
});

export default ParkingSlot;
