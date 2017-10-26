// responsible for showing a single library - data - item
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Section } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    if(this.props.library.id === this.props.selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }


  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    const shouldExpand

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <Section>
            <Text style={titleStyle}>
              {title}
            </Text>
          </Section>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

//  mapStateToProps not required so null
//  actions arguments passes state from
//  actions to Component as props
export default connect(mapStateToProps, actions)(ListItem);
