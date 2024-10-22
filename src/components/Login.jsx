import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import {px, globalStyles} from './../theme';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./../../assets/images/login-page.png')}/>
      <View>
        <Text style={styles.title}>
            AI Wanderlust
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignContent: 'center',
  },
  title: {
    fontSize: px(25), 
    fontFamily: 'playfair-semibold', 
    alignSelf: 'center',
  },
  image: {
    height: px(500), 
    width: px(500),
  }
})
