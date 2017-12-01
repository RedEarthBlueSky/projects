import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Container, Section, Button, ConfirmModal } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { name, phone, shift } = this.props;

    Communications.text(phone, `${name}, your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Container>
        <EmployeeForm />

        <Section>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </Section>

        <Section>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </Section>

        <Section>
          <Button
            onPress={() => this.setState({
              showModal: !this.state.showModal })}
          >
            Fire Employee
          </Button>
        </Section>

        <ConfirmModal
          visible={this.state.showModal}
        >
          Are you sure you want to delete this?
        </ConfirmModal>

      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps,
  { employeeUpdate, employeeSave
  })(EmployeeEdit);
