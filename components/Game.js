import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { emojis } from '../utils';

export default class Game extends Component {
  constructor (props) {
    super(props);
    this.state = {
      emojis: [],
      targetEmoji: {},
      guessEmojis: [],
      score: 0,
      attemptsRemaining: 3 // default 3 lives
    };
    this.restartGame = this.restartGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
  }

  // restartGame method
  restartGame () {
    const emojisArr = emojis.slice();
    this.setState({
      emojis: emojisArr,
      targetEmoji: this.pickRandomEmoji(emojisArr)
    });
  }

  // componentDidMount lifecycle hook
  componentDidMount () {
    this.restartGame();
  }

  // random target emoji picker
  pickRandomEmoji (arr) {
    const emojisArr = emojis.slice();
    return emojisArr[Math.floor(Math.random() * arr.length)];
  }

  // handle change of emoji guess inputs
  handleChange (emojiGuess) {
    this.setState({
      guessEmojis: [...this.state.guessEmojis, emojiGuess]
    });
  }

  // Check the guess emojis
  // TODO: make button inactive if both text inputs are not filled
  checkGuess (emojiGuesses) {
    console.log(this.state.guessEmojis);
    this.setState({
      guessEmojis: []
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Target: {this.state.targetEmoji.emoji}</Text>
        <Text>SCORE: {`${this.state.score}`}</Text>
        <Text>Attempts Remaining: {`${this.state.score}`}</Text>
        <TextInput
          onChangeText={guess => this.handleChange(guess)}
          value={this.state.guess}
          placeholder="❓"
        />
        <Button
          onPress={this.checkGuess}
          title="Submit Guess Emojis"
        />
        <Button
          onPress={this.restartGame}
          title="Restart"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AAA',
    justifyContent: 'center'
  }
});
