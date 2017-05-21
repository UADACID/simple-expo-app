import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import router
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

//import scene
import HomeScreen from './scenes/HomeScreen';
import Login from './scenes/Login';

//initial routes
const Router = createRouter(() => ({
  login: () => Login,
  home: () => HomeScreen,
}));


class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute="login" />
      </NavigationProvider>
    );
  }
}

Expo.registerRootComponent(App);
