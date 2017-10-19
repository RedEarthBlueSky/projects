import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        onChangeText={onChangeText}
        style={inputStyle}
        value={value}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    backgroundColor: 'blue',
    borderColor: '#000',
    color: '#000',
    flex: 2,
    fontSize: 18,
    height: 20,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    width: 100
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40
  }
};

export { Input };
