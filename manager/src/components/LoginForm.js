import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Container, Section, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Container>
        <Section>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
          />
        </Section>

        <Section>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
          />
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

export default connect(null, { emailChanged })(LoginForm);
