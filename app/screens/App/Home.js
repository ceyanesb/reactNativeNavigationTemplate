import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import {SafeAreaView as Safe} from 'react-navigation'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <SafeAreaView style={{ flex: 0, backgroundColor: 'grey' }} />
          <SafeAreaView style={styles.container2}>
              <StatusBar barStyle="dark-content" hidden={false}/>
              <View style={styles.container3}>
                <Text>Home</Text>
              </View>
          </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  container2: {
    flex:1,
    backgroundColor: 'grey',
  },
  container3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  }
});
