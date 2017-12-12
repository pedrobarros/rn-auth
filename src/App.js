import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA-5-qCrCshnlxGYqmbzEfanscgLGeleiA',
      authDomain: 'authentication-1ab2a.firebaseapp.com',
      databaseURL: 'https://authentication-1ab2a.firebaseio.com',
      projectId: 'authentication-1ab2a',
      storageBucket: 'authentication-1ab2a.appspot.com',
      messagingSenderId: '922110217430'
    });

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <View style={{flexDirection: 'row'}}>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;