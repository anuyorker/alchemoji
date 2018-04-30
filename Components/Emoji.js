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
      // if alien got away
      if (this.props.data.emoji === 'alien' && !this.killed) {
        console.log('about to call decrement bc alien got away');
        this.props.decrement();
      }
    }
  }

  handleClick () {
    if (this.props.active) {
      this.killed = true;
      console.log('killed is true, about to call onShoot');
      this.props.onShoot();
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

