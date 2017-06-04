import React from 'react';
import { StyleSheet, View, Image, Animated, Easing, Text } from 'react-native';

export default class StartAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      timePassed: false
    };
  }

  render() {
    setTimeout(() => { this.setState({
      timePassed: true })}, 3000)
      if (!this.state.timePassed) {
        return <Image style={styles.image}  source={require('../images/beerbubbles.gif')} />
      } else {
        return (
        <Text>Pammm</Text>
        )
      }
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  }
});
