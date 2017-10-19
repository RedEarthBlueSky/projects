import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './components/reusable/Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Aye aye Auth!!'} />
      </View>
    );
  }
}

export default App;
