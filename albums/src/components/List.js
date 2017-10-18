import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import ItemDetails from './ItemDetails';


class List extends Component {
  componentWillMount() {
    this.state = { list: [] }; // class level property for initial state

    //  returns a promise
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ list: response.data }))
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.list.map(listItem =>
      <ItemDetails key={listItem.title} listItem={listItem} />
    );
  }

  render() {
    // console.log(this.state);
    return (
      <ScrollView >
        {this.renderItems()}
      </ScrollView>
      );
  }
}

export default List;
