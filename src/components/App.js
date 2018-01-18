import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import LoginForm from './LoginForm';
import config from '../config';

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp(keys);
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const keys = {
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseApiKey,
  databaseURL: config.firebaseApiKey,
  projectId: config.firebaseApiKey,
  storageBucket: config.firebaseApiKey,
  messagingSenderId: config.firebaseApiKey
};
