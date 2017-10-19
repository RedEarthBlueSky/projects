import React from 'react';
import { Text, TouchOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchOpacity
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Text>
        {children}
      </Text>
    </TouchOpacity>
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

export default Button;
