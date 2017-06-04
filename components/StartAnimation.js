import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

const StartAnimation = () => {
    return (
      <View style={styles.container}>
        <Text>Start Animation</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartAnimation;
