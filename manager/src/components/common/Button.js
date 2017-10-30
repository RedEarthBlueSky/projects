import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};
// refactored from export default to object {Button: Button}
// in order to use ComponentHandler.js
// because we have a key value the same we can just use Button
export { Button };
