// responsible for showing a single library - data - item
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Section } from './common';

class ListItem extends Component {
  render() {
    return (
      <Section>
        <Text>{this.props.library.title}</Text>
      </Section>
    );
  }
}

export default ListItem;
