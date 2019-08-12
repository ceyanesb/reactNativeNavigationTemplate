import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import {SafeAreaView as Safe} from 'react-navigation';
import Wizard from './app/screens/Wizard/wizard'
import AppContainer from './app/config/Navigation/navigation'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
