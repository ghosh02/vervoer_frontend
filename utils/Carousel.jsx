import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const Carousel = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image source={item.src} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
  const onViewRef = useRef(viewableItems => {
    const currentIndex = viewableItems.changed[0].index;
    setActiveIndex(currentIndex);

    if (currentIndex === data.length - 1) {
      setTimeout(() => {
        flatListRef.current.scrollToIndex({index: 0, animated: true});
      }, 1000);
    }
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
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
        {data.map((_, index) => (
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
    width: '100%',
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
    width: 340,
    height: 120,
    borderRadius: 14,
    objectFit: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    gap: 10,
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
