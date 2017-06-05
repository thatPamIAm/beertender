import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import BeerCard from './components/beercard';
import StartAnimation from './components/StartAnimation';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentBeerName: '',
      currentBeerStyle: '',
      currentBeerBrewery: ''
    }
  };

  componentDidMount() {
    this.getBeer();
  };

  getBeerBrewery(id) {
    fetch(`http://localhost:3000/api/v2/breweries/${id}`)
    .then(response => response.json())
    .then(breweryArray => {
      const brewery = breweryArray[0].name
      if (!brewery.error) {
        this.setState({ currentBeerBrewery: brewery })
      } else {
        this.setState({
          currentBeerBrewery: 'Brewery not avail'
        });
      }
    })
    .catch(error => {
      console.error('error: ', error)
    })
  }

  getBeer() {
    fetch('http://localhost:3000/api/v2/beers/1')
    .then(response => response.json())
    .then(currentBeer => {
      const { brewery_id, style_id, name } = currentBeer[0]
      this.getBeerBrewery(brewery_id)
      this.getBeerStyle(style_id)
      this.setState({ currentBeerName: name });
    })
    .catch(error => {
      console.error('error: ', error)
    })
  };

  getBeerStyle(id) {
    fetch(`http://localhost:3000/api/v1/styles/${id}`)
    .then(response => response.json())
    .then(styleArray => {
      const style = styleArray[0].name
      if (!style.error) {
        this.setState({ currentBeerStyle: style })
      } else {
        this.setState({ currentBeerStyle: 'n/a' })
      }
    })
    .catch(error => {
      console.error('error: ', error)
    })
  };

  render() {
    return (
      <View>
        <BeerCard
          currentBeerName={ this.state.currentBeerName }
          currentBeerBrewery={ this.state.currentBeerBrewery }
          currentBeerStyle={ this.state.currentBeerStyle } />
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
