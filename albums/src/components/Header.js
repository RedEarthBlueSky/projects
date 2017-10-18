// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> { props.headerText } </Text>
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

// make component available to other parts of app
export default Header;
