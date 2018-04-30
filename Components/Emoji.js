import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { EMOJIS, EMOJI_SIZE } from '../utils';
import SvgUri from 'react-native-svg-uri';

export default class Emoji extends Component {
  constructor (props) {
    super(props);
    this.killed = false;
  }

  componentDidMount () {
    console.log('emoji mounted!');
    setTimeout(() => this.props.remove(this.props.data.id), this.props.data.life);
  }

  componentWillUnmount () {
    if (this.props.active) {
      // if an emoji other an alien was shot but not killed, lower the score
      if (this.props.data.emoji !== 'alien' && !this.killed) {
        this.props.decrement();
      }
    }
  }

  handleClick () {
    if (this.props.active) {
      this.killed = true;
    }
    this.props.onShoot();
  }

  render () {
    return (
      <TouchableWithoutFeedback onPress={() => this.handleClick()}>
        {/*<SvgUri
          style={{ width: EMOJI_SIZE, height: EMOJI_SIZE, position: 'absolute' }}
          resizeMode="cover"
          source={EMOJIS[this.props.data.emoji]}
        />*/}
        <Image
          resizeMode="cover"
          style={[{ width: EMOJI_SIZE, height: EMOJI_SIZE, position: 'absolute' }]}
          source={EMOJIS[this.props.data.emoji]}
        />
      </TouchableWithoutFeedback>
    );
  }
}

