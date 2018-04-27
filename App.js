import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Game from './components/Game';

export default class App extends React.Component {
  render () {
    return (
      <RootNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootNavigator = StackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Alchemoji',
    },
  },
  Game: {
    screen: Game,
    navigationOptions: {
      headerTitle: 'Alchemoji'
    }
  }
});