import React, { Component } from 'react';
import { Button, Container, Section, Input } from './reusable';

class LoginForm extends Component {
  state = { email: '' };

  render() {
    return (
      <Container>
        <Section>
          <Input
            label="Email:"
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
            value={this.state.email}
          />
      </Section>

        <Section />

        <Section>
          <Button>
            Login
          </Button>
        </Section>
      </Container>
    );
  }
}

/*
const styles = {
  inputStyles: {
    height: 20,
    width: 100,
    borderColor: '#000'
  }
};
*/
export default LoginForm;
