import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

const BeerCard = ({ randomBeer, randomBrewery, randomStyle }) => {
  if (!randomBeer) {
    return (
      <View>
        <Text style={styles.beer}>Where is my beer?!?</Text>
      </View>
    )
  }
    return (
      <View style={styles.container}>
        <Text style={styles.beer}>{ randomBeer.name }</Text>
        <Text style={styles.brewery}>{ randomBrewery }</Text>
        <Text style={styles.data}>Style: { randomStyle }</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '30%',
    padding: '5%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  beer: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  brewery: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  data: {
    color: 'red',
    fontSize: 15,
  },
});

export default BeerCard;
