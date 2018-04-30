import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  TOP_AREA_HEIGHT, GRID_AREA_WIDTH, GRID_AREA_HEIGHT,
  EMOJIS, EMOJI_SIZE, MAX_MISSES,
  randomEmoji, randomCoordinates, randomFromArray
} from '../utils';
import { Emoji } from '../Components/Emoji';

let timer = null;

export default class Game extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gameMessage: '...',
      active: false,
      emojis: {},
      score: 0,
      timer: 0,
      missesLeft: MAX_MISSES,
      details: {
        aliensHit: 0
      }
    };
    this.restartGame = this.restartGame.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    this.removeEmoji = this.removeEmoji.bind(this);
    this.incrementTimer = this.incrementTimer.bind(this);
    this.miss = this.miss.bind(this);
  }

  // componentDidMount lifecycle hook
  componentDidMount () {
    this.restartGame();
  }

  // restartGame method
  restartGame () {
    this.setState({
      emojis: {},
      score: 0,
      timer: 0,
      missesLeft: MAX_MISSES,
      gameMessage: '...',
      active: true
    });
    this.startGame();
  }

  addEmoji (life = 3000, moreAliens = 0) {
    if (!this.state.active) return;
    const emojis = this.state.emojis;
    const newEmoji = { emoji: randomEmoji(moreAliens), life, coordinates: randomCoordinates() };

    console.log('ADDED NEW EMOJI ===> ', newEmoji);

    emojis[Date.now() + Math.random() * 10] = newEmoji;
    this.setState({ emojis });
  }

  removeEmoji (emojiKey) {
    const emojis = this.state.emojis;
    // if hit an alien, increment score
    if (emojiKey === 'alien') {
      this.state.score++;
      this.state.details.aliensHit++;
    }
    delete emojis[emojiKey];
    this.setState({ emojis });
  }

  incrementTimer () {
    console.log('timer before increment = ', this.state.timer);

    if (!this.state.active) return;
    const currentTime = this.state.timer;

    if (currentTime >= 0 && currentTime < 5) {
      console.log('first case');
      // generate emojis at a slow rate for 4 seconds with a random lifetime (1,2,3 seconds)
      this.addEmoji(randomFromArray([1000, 2000, 3000]));
    }
    if (currentTime >= 5 && currentTime < 25) {
      if (!(currentTime % 5)) {
        // every 5 seconds generate emojis at a medium rate.
        // we can increase chance of alien appearance using addEmoji(life, moreAliens));
        this.addEmoji(randomFromArray([1000, 2000, 3000]), 2);
      }
    }
    if (currentTime >= 25) {
      if (!(currentTime % 5)) {
        // same here but higher paced generation.
        this.addEmoji(randomFromArray([1000, 2000, 3000]), 5);
      }
    }
    this.state.timer += 1;

    console.log('timer after increment = ', this.state.timer);
  }

  startGame () {
    this.setState({ active: true });
    clearInterval(timer);
    timer = setInterval(() => this.incrementTimer(), 1000);
  }

  miss () {
    console.log('MISS');
    this.setState({ score: this.state.score--, mnissesLeft: this.state.missesLeft-- });
    if (this.state.missesLeft === 0) {
      this.setState({ active: false, gameMessage: 'You lose! 😦' });
    }
  }

  render () {
    const {
      gameMessage,
      score,
      emojis,
      active
    } = this.state;

    return (
        <View>
        {active ? (
            <TouchableWithoutFeedback onPress={() => this.miss()}>
              <View style={{ height: GRID_AREA_HEIGHT }}>
                  {Object.keys(emojis).map(emojiKey => (
                    <Emoji style={{ ...emojis[emojiKey].position }}
                      id={emojiKey}
                      key={emojiKey}
                      data={emojis[emojiKey]}
                      onShoot={() => this.removeEmoji(emojiKey)}
                      remove={emojiId => this.removeEmoji(emojiId)}
                      decrement={() => this.setState({ score: this.state.score-- })}
                      playing={active}
                      score={score} />
                    ))}
              </View>
            </TouchableWithoutFeedback>
        ) : (
             <View style={styles.gameInfo}>
               <Text style={styles.gameInfoMessage}>{gameMessage}</Text>
               <Text style={styles.gameInfoScore}>You scored:
                  <Text style={[styles.gameInfoScore, { color: '#33FF55', fontWeight: 'bold' }]}>
                    {` ${score}`}
                  </Text>
                </Text>
             </View>
           )}
           <View style={styles.gameManager}>
            <Button
                onPress={this.restartGame}
                title="Restart"
              />
              <Button
                onPress={() => { this.props.navigation.navigate('Main'); }}
                title="Quit"
              />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(185, 185, 185, .5)',
    alignItems: 'center',
  },
  gameInfo: {
    alignItems: 'center',
    margin: 20,
    padding: 100
  },
  gameInfoMessage: {
    color: '#000',
    fontSize: 27,
    margin: 10,
    textAlign: 'center'
  },
  gameInfoScore: {
    color: '#000',
    fontSize: 20,
    margin: 15,
    textAlign: 'center'
  },
  gamePlay: {
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: 'rgba(100, 100, 100, .6)',
    margin: 20,
    padding: 10
  },
  gameManager: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'rgba(30, 30, 30, .6)'
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    top: -75
  },
  guessInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(30, 30, 30, .6)'
  },
  emoji: {
    fontSize: 30,
    margin: 2
  }
});
