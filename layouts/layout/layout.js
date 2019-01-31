import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from '../../components';

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <View>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});
