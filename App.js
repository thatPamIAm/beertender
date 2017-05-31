import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      beers : 'beers'
    }
  }

  // grabBeer() {
  //   console.log('in grabBeer')
  //   return <Text>no, Pam was here.</Text>
  //   fetch('/api/v2/beers')
  //   .then(response => response.json())
  //   .then(json => {
  //     const first = json[0].name;
  //     return <Text>{ first }</Text>
  //   })
  //   .catch(error => {
  //     error: 'go fuck yourself'
  //   })
  // }


  grabBeer() {
    fetch('http://localhost:3000/api/v2/beers')
    .then(response => response.json())
    .then(json => {
      return json.map((key, index) => {
        console.log(key);
        return (<Text key='index'>key.name</Text>)
      })
    })
    .catch(error => {
      console.log('fuckkk', error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        { this.grabBeer() }
        <Text>{this.state.beers}</Text>
        <Text>Pammmmmmela is my BEsT fRIenD!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);
