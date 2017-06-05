import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Right, Body } from 'native-base';

var randomColor = require('randomcolor');
let color = randomColor();

export default class TestBeerCard extends Component {
  render() {
    const { randomBeer, randomBrewery, randomStyle } = this.props;


    const cardInfo = [
      {
        text: 'Test',
        name: 'One',
        image: require('../images/beerbubbles.gif'),
        image2: require('../images/beer.png'),
        background: color
      },
    ];

    return (
      <DeckSwiper
        dataSource={cardInfo}
        renderItem={item =>
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image} />
                <Body>
                  <Text>{randomBeer.name}</Text>
                  <Text>Style: {randomStyle}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={{ resizeMode: 'center', width: '100%', backgroundColor: item.background }} source={item.image2} />
            </CardItem>
            <CardItem>
              <Icon name="pint" style={{ color: '#ED4A6A' }} />
              <Text>Brewery: {randomBrewery}</Text>
            </CardItem>
          </Card>
        }
      />
    );
  }
}
