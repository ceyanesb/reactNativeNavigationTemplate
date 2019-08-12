import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, StatusBar, Button } from 'react-native';
import {SafeAreaView as Safe} from 'react-navigation';
import Swiper from 'react-native-swiper'

export default class Wizard1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <SafeAreaView style={{ flex: 0, backgroundColor: 'grey' }} />
          <SafeAreaView style={styles.container2}>
              <StatusBar barStyle="dark-content" hidden={false}/>
              <View style={styles.container3}>
                <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
                  <View style={styles.slide1}>
                    <Text style={styles.text}>Wizard Step 1</Text>
                  </View>
                  <View style={styles.slide2}>
                    <Text style={styles.text}>Wizard Step 2</Text>
                  </View>
                  <View style={styles.slide3}>
                    <Text style={styles.text}>Wizard Step 3</Text>
                    <Button
                      title="Go to Auth"
                      onPress={() => this.props.navigation.navigate('Auth')}
                    />
                  </View>
                </Swiper>
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
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
