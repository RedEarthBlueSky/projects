import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import config from './config.json';

class App extends Component {
  componentWillMount() {
    console.log(config);
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello, welcome to my new App!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
