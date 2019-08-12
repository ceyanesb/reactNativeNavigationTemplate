import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, StatusBar, Button } from 'react-native';
import {SafeAreaView as Safe} from 'react-navigation'

export default class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <SafeAreaView style={{ flex: 0, backgroundColor: 'grey' }} />
          <SafeAreaView style={styles.container2}>
              <StatusBar barStyle="dark-content" hidden={false}/>
              <View style={styles.container3}>
                <Text>Signup</Text>
                <Button
                  title="Go to App"
                  onPress={() => this.props.navigation.navigate('App')}
                />
                <Button
                  title="Go to Sign In"
                  onPress={() => this.props.navigation.navigate('SignIn')}
                />
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
