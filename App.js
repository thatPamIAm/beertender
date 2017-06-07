import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Badge, Icon } from 'native-base';

import BeerCard from './components/beercard';
import LoginForm from './components/Form';
import SwipeCard from './components/SwipeCard';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];

const url = configuration.url;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentBeerName: '',
      currentBeerStyle: '',
      currentBeerBrewery: '',
      counter: 1,
      favorites: 0,
    };
  }

  componentDidMount() {
    this.getBeer();
  }

  addFavorite() {
    console.log('made it here ', this.state.favorites)
    const favTotal = this.state.favorites += 1;
    this.setState({
      favorites: favTotal
    })
  }

  getBeerBrewery(id) {
    fetch(`${url}/api/v2/breweries/${id}`)
    .then(response => response.json())
    .then(breweryArray => {
      const brewery = breweryArray[0].name;
      if (!brewery.error) {
        this.setState({ currentBeerBrewery: brewery });
      } else {
        this.setState({
          currentBeerBrewery: 'Brewery not avail'
        });
      }
    })
    .catch(error => {
      console.error('error: ', error);
    });
  }

  getBeer() {
    fetch(`${url}/api/v2/beers/${this.state.counter}`)
    .then(response => response.json())
    .then(currentBeer => {
      const { brewery_id, style_id, name } = currentBeer[0];
      this.getBeerBrewery(brewery_id);
      this.getBeerStyle(style_id);
      this.setState({ currentBeerName: name });
    })
    .catch(error => {
      error: 'getBeer ERROR: ', error
    });
    const incrementCounter = this.state.counter += 1;
    this.setState({
      counter: incrementCounter
    });
  }

  getBeerStyle(id) {
    fetch(`${url}/api/v1/styles/${id}`)
    .then(response => response.json())
    .then(style => {
      if (style.error) {
        this.setState({
          currentBeerStyle: 'n / a',
        })
      } else {
        this.setState({
          currentBeerStyle: style[0].name
        });
      }
    })
    .catch(error => {
      console.error('grabStyle error: ', error);
    });
  }

  render() {
    return (
      <Container style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <Header>
          <Left>
            <Button transparent>
              <Title style={{ color: '#ff9900' }}>BeerTender</Title>
            </Button>
          </Left>

          <Right>
            <Button transparent>
              <Icon name='beer' />
              <Badge warning style={{ height: 20 }}>
                <Text style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: '#fff'
                }}>{ this.state.favorites }</Text>
            </Badge>
          </Button>
        </Right>
      </Header>
      <Content style={{
        width: '90%',
        marginTop: '5%',
        marginLeft: '5%',
      }}>
      <SwipeCard randomBeer={ this.state.currentBeerName }
                    randomBrewery={ this.state.currentBeerBrewery }
                    randomStyle={ this.state.currentBeerStyle }
                    getBeer={ this.getBeer.bind(this) }
                    addFavorite={ this.addFavorite.bind(this) }
      />
        </Content>
        <Footer style={{ height: 35, padding: 5 }}>
          <Text style={{ fontSize: 17 }}>🍻🍺🍻</Text>
        </Footer>
      </Container>

    );
  }
}

AppRegistry.registerComponent('App', () => App);
