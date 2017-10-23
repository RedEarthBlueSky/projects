import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Container, Section, Spinner, Input } from './reusable';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed!', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
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
          {this.renderButton()}
        </Section>
      </Container>
    );
  }
} // end Class

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 20,
  }
};
export default LoginForm;
