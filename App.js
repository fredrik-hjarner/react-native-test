import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Layout } from './layouts';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Layout>
        <View style={styles.container}>
          <Text>{'Open up App.js to start\n working on your app!'}</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
