// responsible for showing a single library - data - item
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Section } from './common';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    return (
      <Section>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </Section>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
