import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Badge, Icon } from 'native-base';

import BeerCard from './components/beercard';
import LoginForm from './components/Form';
import TestBeerCard from './components/test';

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
  }

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
                  }}>1</Text>
              </Badge>
            </Button>
          </Right>
        </Header>
        <Content style={{
            width: '90%',
            marginTop: '5%',
            marginLeft: '5%',
          }}>
          <TestBeerCard randomBeer={ this.state.randomBeer }
                        randomBrewery={ this.state.randomBrewery }
                        randomStyle={ this.state.style }
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
