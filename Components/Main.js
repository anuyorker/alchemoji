import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <Image style={styles.backgroundImage} source={require('../assets/space.jpg')} />
    <View style={[styles.container, styles.mainContent]}>
      <View style={styles.box}>
      <Text style={styles.text}>👾👾Emoji Invaders🔫😏</Text>
      <Button
        onPress={() => navigation.navigate('Game')}
        title="Start"
      />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 27,
    margin: 10,
    textAlign: 'center'
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    top: -75
  },
  box: {
    borderWidth: 3,
    borderColor: '#111',
    backgroundColor: 'rgba(30, 30, 30, .6)'
  }
});

export default Main;
