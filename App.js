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
