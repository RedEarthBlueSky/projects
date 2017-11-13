//  all screens/scenes a user can navigate to
import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

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
          />


          <Scene
            //  hack to hide the back button as
            //  do not want the user to navigate back
            type='reset'
            //  end hack
            onRight={() => Actions.employeeCreate()}
            rightTitle='Add'
            key='employeeList'
            component={EmployeeList}
            title='Employees'
          />

          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Create Employee'
            initial
          />

      </Scene>
    </Router>
  );
};

export default RouterComponent;
