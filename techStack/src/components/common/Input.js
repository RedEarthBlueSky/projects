import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
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
    flex: 3,
    fontSize: 18,
    height: 30,
    lineHeight: 23,
    paddingRight: 10,
    width: 100
  },
  labelStyle: {
    backgroundColor: 'red',
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
