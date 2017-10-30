// responsible for showing a single library - data - item
import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Section } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {  // called whenever component is to be rerendered
    LayoutAnimation.spring();
  }


  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <Section>
          <Text>
            {library.description}
          </Text>
        </Section>);
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

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
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
