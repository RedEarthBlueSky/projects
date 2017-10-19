import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Container, Section } from './reusable';

class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Section />
        <Section>
          <Text>
            LoginForm
          </Text>
        </Section>
        <Section>
          <Button>
            Login
          </Button>
        </Section>
      </Container>
    );
  }
}

export default LoginForm;
