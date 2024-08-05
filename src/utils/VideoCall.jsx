// VideoCall.js
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const VideoCall = ({onClose, onDragStart, onDragEnd}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({x: 0, y: 0});
        if (onDragStart) {
          onDragStart();
        }
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gesture) => {
        if (onDragEnd) {
          onDragEnd();
        }
        const crossButtonPosition = {
          x: width / 2 - 30,
          y: height - 110,
          width: 60,
          height: 60,
        };
        const videoCallPosition = {
          x: gesture.moveX,
          y: gesture.moveY,
          width: 80,
          height: 80,
        };

        const isOverlapping =
          videoCallPosition.x <
            crossButtonPosition.x + crossButtonPosition.width &&
          videoCallPosition.x + videoCallPosition.width >
            crossButtonPosition.x &&
          videoCallPosition.y <
            crossButtonPosition.y + crossButtonPosition.height &&
          videoCallPosition.y + videoCallPosition.height >
            crossButtonPosition.y;

        if (isOverlapping) {
          onClose();
        }
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[pan.getLayout(), styles.videoContainer]}>
      <Text style={styles.videoText}>Video Call</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: 150,
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 100,
  },
  videoText: {
    color: 'white',
    fontSize: 16,
  },
});

export default VideoCall;
