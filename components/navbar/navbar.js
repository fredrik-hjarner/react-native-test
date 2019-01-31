import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Navbar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1,
    flexDirection: 'row',
    height: 50, */
    backgroundColor: 'grey',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});
