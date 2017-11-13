import React, { Component } from 'react';
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
        
        <Section />

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
