import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Container, Section, Input } from './reusable';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' });
          });
      });
  }

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

      <Section>
        <Input
          label='Password:'
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
        />
      </Section>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <Section>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </Section>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  }
};
export default LoginForm;
