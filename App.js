import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      beers: [],
      test: []
    }
  }

  componentDidMount() {
    this.grabBeer()
  }

  grabBeer() {
    fetch('http://localhost:3000/api/v2/beers')
    .then(response => response.json())
    .then(beers => {
      this.setState({
        test: 'suh, dude',
        beers: beers
      });
    })
    .catch(error => {
      error: 'grabBeer error: ', error
    })
    console.log(this.state.beers)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.test}</Text>
        <Text>Jon Pam asfdm!</Text>
      </View>
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

AppRegistry.registerComponent('App', () => App);
