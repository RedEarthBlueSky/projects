import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
  return (
    <View style={styles.sectionStyle}>
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

export default Section;
