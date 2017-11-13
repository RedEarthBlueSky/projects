import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Section, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Container>
        <Section>
          <Input
            label='Name'
            placeholder='Employee name'
          />
        </Section>
        <Section>
          <Input
            label='Phone'
            placeholder='555-555-555'
          />
        </Section>
        <Section>
          <Text>Section 3</Text>
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

export default EmployeeCreate;
