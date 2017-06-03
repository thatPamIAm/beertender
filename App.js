import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      beers: [],
      breweries: []
    }
  }

  componentDidMount() {
    this.grabBeer();
    this.grabBrewery();
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
  }

  grabBrewery() {
    fetch('http://localhost:3000/api/v2/breweries')
    .then(response => response.json())
    .then(brewery => {
      this.setState({
        breweries: brewery
      });
    })
    .catch(error => {
      error: 'grabBrewery error: ', error
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.breweries}</Text>
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
