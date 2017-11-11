//  all screens/scenes a user can navigate to
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

// pretty big bug took me a white to figure out, must have a
// root scene - key=root - to contain all the other scenes

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
      <Scene key='root'>

          <Scene
            key='login'
            component={LoginForm}
            title='Please Login'
            initial
          />


          <Scene
            //  hack to hide the back button as
            //  do not want the user to navigate back
            type='reset'
            //  end hack
            onRight={() => console.log('right!')}
            rightTitle='Add Employee'
            key='employeeList'
            component={EmployeeList}
            title='Employees'
          />

      </Scene>
    </Router>
  );
};

export default RouterComponent;
