import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Main, Game } from './Components';

const RootNavigator = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

