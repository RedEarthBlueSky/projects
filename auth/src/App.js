import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/reusable';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}> 
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Aye aye Auth!!' />
      {this.renderContent()}
      </View>
    );
  }
}

export default App;
