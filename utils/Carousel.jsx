import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const images = [
  {id: '1', src: require('../assets/carousel.png')},
  {id: '2', src: require('../assets/carousel.png')},
  {id: '3', src: require('../assets/carousel.png')},
  {id: '4', src: require('../assets/carousel.png')},
  // Add more images here
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image source={item.src} style={styles.image} />
      </TouchableOpacity>
    </View>
  );

  const onViewRef = React.useRef(viewableItems => {
    setActiveIndex(viewableItems.changed[0].index);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {opacity: index === activeIndex ? 1 : 0.2},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flexGrow: 0,
  },
  item: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 360,
    height: 150,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    gap: 10,
    // position: 'absolute',
    // bottom: 10,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#FF9401',

    marginTop: 8,
  },
});

export default Carousel;
