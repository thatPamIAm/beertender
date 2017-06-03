import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class BeerCard extends React.Component {
  render() {
    const { name, beer_id, cat_id, style_id, brewery_id } = this.props.beers;
    return(
      <View>
        <Text>{name}</Text>
        <Text>MARISSA</Text>

      </View>
    )
  }
}
