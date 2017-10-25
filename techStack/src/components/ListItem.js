// responsible for showing a single library - data - item
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Section } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    console.log(this.props);

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

//  mapStateToProps not required so null
//  actions arguments passes state from
//  actions to Component as props
export default connect(null, actions)(ListItem);
