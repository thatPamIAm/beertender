import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

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

const BeerCard = ({ currentBeerName, currentBeerBrewery, currentBeerStyle }) => {
  if (!currentBeerName) {
    return (
      <View>
        <Text style={styles.beer}>Where is my beer?!?</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.beer}>{ currentBeerName }</Text>
      <Text style={styles.brewery}>{ currentBeerBrewery }</Text>
      <Text style={styles.data}>Style: { currentBeerStyle }</Text>
    </View>
  );
};

export default BeerCard;
