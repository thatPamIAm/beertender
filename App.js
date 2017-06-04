import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import BeerCard from './components/beercard';
import StartAnimation from './components/StartAnimation';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      breweries: [],
      randomBeer: [],
      randomBrewery: '',
      style: '',
    }
  };

  componentDidMount() {
    this.grabBrewery();
    this.grabBeer();
  };

  grabRandomBeer() {
    const shuffle = this.state.beers[Math.floor(Math.random()*this.state.beers.length)];
    this.setState({
      randomBeer: shuffle
    });
    this.grabRandomBrewery(this.state.randomBeer.brewery_id)
    this.grabRandomStyle(this.state.randomBeer.style_id)
  };

  grabRandomBrewery(id) {
    fetch(`http://localhost:3000/api/v2/breweries/${id}`)
    .then(response => response.json())
    .then(brewery => {
      if (!brewery.error) {
        const breweryName = brewery[0].name;
        this.setState({
          randomBrewery: breweryName,
        })
      } else {
        this.setState({
          randomBrewery: 'Brewery not avail'
        });
      }
    })
    .catch(error => {
      error: 'grabBrewery error: ', error
    })
  };

  grabBeer() {
    fetch('http://localhost:3000/api/v2/beers')
    .then(response => response.json())
    .then(beers => {
      this.setState({
        beers: beers
      });
    })
    .then(() => {
      this.grabRandomBeer()
    })
    .catch(error => {
      error: 'grabBeer error: ', error
    })
  };

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
  };

  grabRandomStyle(id) {
    fetch(`http://localhost:3000/api/v1/styles/${id}`)
    .then(response => response.json())
    .then(style => {
      if (!style.error) {
        const styleName = style[0].name;
        this.setState({
          style: styleName,
        })
      } else {
        this.setState({
          style: 'n / a'
        });
      }
    })
    .catch(error => {
      error: 'grabBrewery error: ', error
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <StartAnimation />
        <BeerCard randomBeer={ this.state.randomBeer } randomBrewery={ this.state.randomBrewery } randomStyle={ this.state.style } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);
