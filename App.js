import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 100)' }}>
        <View style={{ flexDirection: 'row', backgroundColor: 'lightblue' }}>
          <Text style={{fontSize: 40}}>1</Text>
          <Text style={{fontSize: 40}}>2</Text>
          <Text style={{fontSize: 40}}>3</Text>
        </View>
        <View>
          <Text style={{fontSize: 40}}>1</Text>
        </View>
      </View>
    );
  }
}

