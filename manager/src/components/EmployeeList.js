import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    //  call here and below means no matter we
    //  come from the employee list will be loaded
    this.createDataSource(this.props);
  }

  //
  componentWillReceiveProps(nextProps) {
    //  nextProps are the next set of props this components
    //  will be rendered with
    //  this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    return (
      <View>
        <Text> Employee List! </Text>
        <Text> Employee List! </Text>
        <Text> Employee List! </Text>
        <Text> Employee List! </Text>
        <Text> Employee List! </Text>
        <Text> Employee List! </Text>
        <Text> Employee List! </Text>
        <Text> Employee List! </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name: 'S', id: 'dfddfd' }
  });
};

export default connect(null, { employeesFetch })(EmployeeList);
