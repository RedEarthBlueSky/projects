import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Container, Section, Button } from './common';

class EmployeeEdit extends Component {
  render() {
    return (
      <Container>
        <EmployeeForm />
        <Section>
          <Button>
            Save Changes
          </Button>
        </Section>
      </Container>
    );
  }
}

export default connect()(EmployeeEdit);
