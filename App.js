import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { random } from 'lodash';

export default class App extends Component {
  randomColor() {
    return `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
  }

  renderNavbarItem(text: string) {
    return (
      <TouchableOpacity underlayColor="white" onPress={() => {}}>
        <View style={{ padding: 10, backgroundColor: this.randomColor() }}>
          <Text style={{fontSize: 40}}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  } 

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 100)' }}>
        <View style={{ flexDirection: 'row', backgroundColor: 'lightblue', borderBottomColor: 'black', borderBottomWidth: 1 }}>
          {this.renderNavbarItem('ett')}
          {this.renderNavbarItem('två')}
          {this.renderNavbarItem('tre')}
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{fontSize: 40}}>Test</Text>
        </View>
      </View>
    );
  }
}

