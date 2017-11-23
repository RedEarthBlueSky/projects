import React, { Component } from 'react';
import { Text } from 'react-native';
import { Section } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <Section>
        <Text style={styles.titleStyle}>
          {name}
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
