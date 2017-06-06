import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Right, Body } from 'native-base';

const randomColor = require('randomcolor');

export default class SwipeCard extends Component {
  constructor(props) {
    super(props)
  }

    next() {
    console.log('next');
    this.getBeer();

  }

  previous() {
    console.log('werking previous')
  }

  getBeer(){
    this.props.getBeer(27)
  }

  render() {
    const { randomBeer, randomBrewery, randomStyle, handleSwipe } = this.props;
    const cardInfo = [
      {
        brewery: randomBrewery,
        name: randomBeer,
        style: randomStyle,
        image: require('../images/beerbubbles.gif'),
        image2: require('../images/beer.png'),
        background: randomColor(),
      }
    ];


    return (
      <DeckSwiper
        onSwipeRight={() => this.next()}
        onSwipeLeft={() => this.previous()}
        dataSource={cardInfo}
        renderItem={item =>
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image} />
                <Body>
                  <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                  <Text style={{ fontSize: 10 }}>Style: {item.style}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={{
                resizeMode: 'center',
                width: '100%',
                backgroundColor: item.background
              }}
              source={item.image2} />
            </CardItem>
            <CardItem>
              <Icon name="beer" style={{ color: '#ED4A6A' }} />
              <Text style={{ fontSize: 12 }}>Brewery: {item.brewery}</Text>
            </CardItem>
          </Card>
        }
      />
    );
  }
}
