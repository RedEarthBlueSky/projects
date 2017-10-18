import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import List from './src/components/List';

const App = () =>
  (
    // expand component fill view
    <View style={{ flex: 1 }}>
      <Header headerText={'Aye Albums!'} />
      <List />
    </View>
  );

AppRegistry.registerComponent('albums', () => App);
