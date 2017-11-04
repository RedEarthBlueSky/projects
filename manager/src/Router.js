//  all screens/scenes a user can navigate to
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

// pretty big bug took me a white to figure out, must have a
// root scene - key=root - to contain all the other scenes
const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='login' component={LoginForm} title='Please Login' />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
