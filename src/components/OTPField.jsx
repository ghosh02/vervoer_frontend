import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const OTPField = () => {
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const pin1ref = useRef();
  const pin2ref = useRef();
  const pin3ref = useRef();
  const pin4ref = useRef();
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        paddingVertical: 50,
      }}>
      <View
        style={[
          styles.TextInputView,
          {borderColor: isFocused1 ? '#FF9401' : 'black'},
        ]}>
        <TextInput
          ref={pin1ref}
          style={styles.TextInputText}
          keyboardType="number-pad"
          maxLength={1}
          value={pin1}
          selectionColor="transparent"
          onFocus={() => setIsFocused1(true)}
          onBlur={() => setIsFocused1(false)}
          onChangeText={e => {
            setPin1(e);
            if (e.length === 1) {
              pin2ref.current.focus();
            } else if (e.length === 0) {
              pin1ref.current.focus();
            }
          }}
        />
      </View>
      <View
        style={[
          styles.TextInputView,
          {borderColor: isFocused2 ? '#FF9401' : 'black'},
        ]}>
        <TextInput
          ref={pin2ref}
          style={styles.TextInputText}
          keyboardType="number-pad"
          maxLength={1}
          value={pin2}
          selectionColor="transparent"
          onFocus={() => setIsFocused2(true)}
          onBlur={() => setIsFocused2(false)}
          onChangeText={e => {
            setPin2(e);
            if (e.length === 1) {
              pin3ref.current.focus();
            } else if (e.length === 0) {
              pin1ref.current.focus();
            }
          }}
        />
      </View>
      <View
        style={[
          styles.TextInputView,
          {borderColor: isFocused3 ? '#FF9401' : 'black'},
        ]}>
        <TextInput
          ref={pin3ref}
          style={[styles.TextInputText]}
          keyboardType="number-pad"
          maxLength={1}
          value={pin3}
          selectionColor="transparent"
          onFocus={() => setIsFocused3(true)}
          onBlur={() => setIsFocused3(false)}
          onChangeText={e => {
            setPin3(e);
            if (e.length === 1) {
              pin4ref.current.focus();
            } else if (e.length === 0) {
              pin2ref.current.focus();
            }
          }}
        />
      </View>
      <View
        style={[
          styles.TextInputView,
          {borderColor: isFocused4 ? '#FF9401' : 'black'},
        ]}>
        <TextInput
          ref={pin4ref}
          style={styles.TextInputText}
          keyboardType="number-pad"
          maxLength={1}
          value={pin4}
          selectionColor="transparent"
          onFocus={() => setIsFocused4(true)}
          onBlur={() => setIsFocused4(false)}
          onChangeText={e => {
            setPin4(e);
            if (e.length === 0) {
              pin3ref.current.focus();
            }
            // else if (e.length === 1) {
            //   pin4ref.current.blur();
            // }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputView: {
    borderWidth: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 100,
    borderRadius: 100,
  },
  TextInputText: {
    fontSize: 20,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
});

export default OTPField;
