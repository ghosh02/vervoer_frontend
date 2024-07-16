import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import NavMenu from '../../components/NavMenu';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const navigation = useNavigation();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const newHistory = [searchTerm, ...searchHistory].slice(0, 5);
      setSearchHistory(newHistory);
      setSearchTerm('');
    }
  };

  const deleteSearchItem = index => {
    const newHistory = searchHistory.filter((_, i) => i !== index);
    setSearchHistory(newHistory);
  };

  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <NavMenu />
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={{width: '10%'}} onPress={handleSearch}>
            <Icon name="search1" size={25} color="black" />
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              height: 45,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.input}
              placeholderTextColor="gray"
              placeholder="Search..."
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            {searchTerm !== null ? (
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: '#ddd',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                }}
                onPress={() => {
                  setSearchTerm(null);
                }}>
                <Icon name="close" size={20} color="gray" />
              </TouchableOpacity>
            ) : (
              ''
            )}
          </View>
        </View>
      </View>
      <View style={styles.recentContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 15,
            marginVertical: 35,
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
          <Text
            style={{
              color: 'black',
              fontSize: 22,
            }}>
            Recent search
          </Text>
        </View>
        <FlatList
          data={searchHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.historyItemContainer}>
              <TouchableOpacity style={{width: '90%', height: 35}}>
                <Text style={styles.historyItem}>{item}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteSearchItem(index)}>
                <Icon name="close" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingHorizontal: 10,
    shadowColor: '#000',
    elevation: 5,
  },
  input: {
    color: '#000',
    width: '82%',
    height: 40,
  },
  historyTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  historyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#666',
  },
  historyItem: {
    fontSize: 17,
    color: '#333',
  },
  recentContainer: {
    paddingHorizontal: 30,
  },
});

export default SearchPage;
