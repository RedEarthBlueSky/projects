import React, { Component } from 'react';
import { Button, Container, Section, Input } from './reusable';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Container>
        <Section>
          <Input
            /* this is just the way text input is handled */
            label="Email:"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
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
