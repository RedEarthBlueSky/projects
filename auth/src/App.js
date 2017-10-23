import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/reusable';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBw96h-RX0EF769ywmwuy3hJdrD7CmGtQo',
      authDomain: 'authenication-module.firebaseapp.com',
      databaseURL: 'https://authenication-module.firebaseio.com',
      projectId: 'authenication-module',
      storageBucket: 'authenication-module.appspot.com',
      messagingSenderId: '1002853733277'
    });

    firebase.auth().onAuthStateChanged((user) => {
      
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Aye aye Auth!!' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
