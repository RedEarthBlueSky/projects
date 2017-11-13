import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Container, Section, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Container>
        <Section>
          <Input
            label='Name'
            placeholder='Employee name'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </Section>
        <Section>
          <Input
            label='Phone'
            placeholder='555-555-555'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </Section>
        <Section>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </Section>

        <Section>
          <Button>
            Create
          </Button>
        </Section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
