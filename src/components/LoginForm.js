import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Card, CardSection, Input, CommonButton, ErrorText, Spinner } from './common/';

import LogoutForm from './LogoutForm';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', user: '', loading: false, loggedIn: false };
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, loggedIn: true, email: '', password: '' });
        return;
      }
      this.setState({ user, loggedIn: false });
    });
  }
  handleLoginButton() {
    const { email, password } = this.state;
    this.setState({ loading: true, error: '' });
    this.signInUser({
      email,
      password,
      userNotFound: this.createUser.bind(this)
    });
  }
  createUser(props) {
    const { email, password } = props;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log('NEW ERR', err);
        const { code } = err;
        switch (code) {
          case 'auth/email-already-in-use':
            this.setState({ error: 'Wrong email/password combination', loading: false });
            break;
          case 'auth/invalid-email':
            this.setState({ error: 'Wrong email/password combination', loading: false });
            break;
          case 'auth/operation-not-allowed':
            this.setState({ error: 'Operation not allowed', loading: false });
            break;
          case 'auth/weak-password':
            this.setState({
              error: 'Password not strong enough for account creation',
              loading: false
            });
            break;
          default:
            break;
        }
      });
  }
  signInUser(props) {
    const { email, password, userNotFound } = props;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log('OLD ERR', err);
        const { code } = err;
        switch (code) {
          case 'auth/invalid-email':
            this.setState({ error: 'Wrong email/password combination', loading: false });
            break;
          case 'auth/user-disabled':
            this.setState({ error: 'Authentication error', loading: false });
            break;
          case 'auth/user-not-found':
            userNotFound({ email, password });
            break;
          case 'auth/wrong-password':
            this.setState({ error: 'Wrong email/password combination', loading: false });
            break;
          default:
            break;
        }
      });
  }
  renderButtons() {
    const { loading } = this.state;
    if (loading) {
      return <Spinner size="small" />;
    }
    return <CommonButton onPress={this.handleLoginButton.bind(this)} title={'Log In'} />;
  }
  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <LogoutForm />;
    }
    return (
      <Card>
        <CardSection top>
          <Input
            label="Email"
            placeholder="enter email"
            secureTextEntry={false}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="enter password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>

        <ErrorText>{this.state.error}</ErrorText>

        <CardSection>{this.renderButtons.bind(this)()}</CardSection>
      </Card>
    );
  }
}

export default LoginForm;
