import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

const BeerCard = ({ randomBeer }) => {
  console.log(randomBeer)
  if (!randomBeer) {
    return(
      <View>
        <Text>It's a scam</Text>
      </View>
    )
  }
    return(
      <View>
        <Text>{ randomBeer.name }</Text>
        <Text>{ randomBeer.brewery_id }</Text>
        <Text>{ randomBeer.style_id }</Text>
        <Text>{ randomBeer.cat_id }</Text>
        <Text>{ randomBeer.beer_id }</Text>
        <Text>beer card</Text>
      </View>
    )
}

export default BeerCard;
