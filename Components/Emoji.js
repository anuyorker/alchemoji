import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { EMOJIS, EMOJI_SIZE } from '../utils';
import SvgUri from 'react-native-svg-uri';

export default class Emoji extends Component {
  constructor (props) {
    super(props);
    this.killed = false;
    this.emojiTimeout = null;
  }

  componentDidMount () {
    this.emojiTimeout = setTimeout(() => this.props.remove(this.props.data.id), this.props.data.life);
  }

  componentWillUnmount () {
    if (this.props.active) {
      // if alien got away
      if (this.props.data.emoji === 'alien' && !this.killed) {
        this.props.miss();
      }
    }
  }

  componentWillReceiveProps () {
    if (this.props.active) {
      clearTimeout(this.emojiTimeout);
    }
  }

  handleClick () {
    if (this.props.active) {
      this.killed = true;
      if (this.props.data.emoji !== 'alien') { // hit a non alien - decrement
        this.props.miss();
        this.props.hitGoodGuyDecrement();
      } else if (this.props.data.emoji === 'alien') { // hit the alien - incrememnt
        this.props.hitAlienIncrement();
      }
      this.props.remove();
    }
  }

  render () {
    const imgPath = EMOJIS[this.props.data.emoji];

    return (
      <TouchableWithoutFeedback onPress={() => this.handleClick()}>
        <Image
          resizeMode="cover"
          style={[{ width: EMOJI_SIZE, height: EMOJI_SIZE, position: 'absolute' }, this.props.style]}
          source={imgPath}
        />
      </TouchableWithoutFeedback>
    );
  }
}

