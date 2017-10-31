import React, { Component } from 'react';
import { Container, Section, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Section>
          <Input
            label='Email'
            placeholder='email@gmail.com'
          />
        </Section>

        <Section>

        </Section>

        <Section>

        </Section>
      </Container>
    );
  }
}

export default LoginForm;
