import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { emojis, targets } from '../utils';

export default class Game extends Component {
  constructor (props) {
    super(props);
    this.state = {
      emojis: [],
      targets: [],
      targetEmoji: {},
      currentGuess: '',
      guessEmojis: [],
      score: 0,
      attemptsRemaining: 3, // default 3 lives
      gameMessage: 'Discover the perfect mix of emojis',
      active: true
    };
    this.restartGame = this.restartGame.bind(this);
    this.generateRandomTargetEmoji = this.generateRandomTargetEmoji.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
  }

  // restartGame method
  restartGame () {
    const emojisArr = emojis.slice();
    const targetsArr = targets.slice();
    this.setState({
      emojis: emojisArr,
      targets: targetsArr,
      targetEmoji: this.generateRandomTargetEmoji(targetsArr),
      score: 0,
      currentGuess: '',
      gameMessage: 'Discover the perfect mix of emojis',
      active: true
    });
  }

  // componentDidMount lifecycle hook
  componentDidMount () {
    this.restartGame();
  }

  // random target emoji picker
  generateRandomTargetEmoji (arr) {
    const targetsArr = targets.slice();
    return targetsArr[Math.floor(Math.random() * arr.length)];
  }

  // handle change of emoji guess inputs
  handleChange (emojiGuess) {
    this.setState({
      currentGuess: emojiGuess,
      guessEmojis: [...this.state.guessEmojis, emojiGuess]
    });
  }

  // check the guess emojis
  // TODO: make button inactive if both text inputs are not filled
  checkGuess (emojiGuesses) {
    let {
      emojis,
      targets,
      targetEmoji,
      score,
      attemptsRemaining,
      currentGuess,
      gameMessage,
      active
    } = Object.assign({}, this.state);
    const transformedGuess = currentGuess.replace(/\W/g, '').toLowerCase();
    const transformedAnswer = emojis[targetEmoji].answer.replace(/\W/g, '').toLowerCase();
    if (transformedGuess === transformedAnswer) { // correct answer
      score += 1; // increment the score
      gameMessage = 'Nice! 😺';
      targets = targets.filter((target, index) => index !== targetEmoji);
      targetEmoji = this.generateRandomTargetEmoji(targets);
    } else { // incorrect answer
      attemptsRemaining -= 1; // decrement attempts remaining
      if (attemptsRemaining === 0) { // no more attempts remaining
        // TODO: render the 'You Lose' display'
        gameMessage = 'You lost! 😦';
        this.restartGame();
      }
      gameMessage = 'Not quite... 😏';
    }

    // TODO: refine Win Condition, currently it's just set to a score of 5
    if (score === 5) {
      gameMessage = 'You Win! 🏆';
      active = false;
    }

    this.setState({
      guessEmojis: []
    });
  }

  render () {
    const {
      targetEmoji,
      score,
      attemptsRemaining,
      currentGuess,
      gameMessage,
      active
    } = this.state;

    return (
      <View style={styles.container}>
        <Text>Target: {targetEmoji.emoji}</Text>
        <Text>SCORE: {`${score}`}</Text>
        <Text>Attempts Remaining: {`${attemptsRemaining}`}</Text>
        <TextInput
          onChangeText={guess => this.handleChange(guess)}
          value={currentGuess}
          placeholder="P1"
        />
        <TextInput
          onChangeText={guess => this.handleChange(guess)}
          value={currentGuess}
          placeholder="P2"
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
