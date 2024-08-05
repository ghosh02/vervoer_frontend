import React from 'react';
import {TextInput} from 'react-native';

const Field = props => {
  return (
    <TextInput
      {...props}
      placeholderTextColor="gray"
      style={{
        color: 'black',
        width: '80%',
        borderBottomWidth: 1,
        fontSize: 18,
        textDecorationLine: 'none',
      }}></TextInput>
  );
};

export default Field;
