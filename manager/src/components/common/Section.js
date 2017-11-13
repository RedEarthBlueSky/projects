import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
  return (
    <View style={[styles.sectionStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  sectionStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative'
  }
};
// refactored from export default to object {Section: Section}
// in order to use ComponentHandler.js
// because we have a key value the same we can just use Button
export { Section };
