import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#4717f6',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#a239ca',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.6
  },
  textStyle: {
    color: '#fff',
    fontSize: 20
  }
};
// refactored from export default to object {Header: Header}
// in order to use ComponentHandler.js
// because we have a key value the same we can just use Button

export { Header };
