import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import {px, globalStyles, colors} from './../theme';
import {useRouter} from 'expo-router';

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./../../assets/images/login-page.png')}/>
      <View style={styles.loginInfo}>
        <Text style={styles.title}>
            AI Wanderlust
        </Text>
        <Text style={styles.description}>
            Discover your next adventure effortlessly. 
            Personalized itineraries at your fingertips. 
            Travel smarter aith AI-driven insights.
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/auth/sign-in/SignIn')} 
          style={styles.button}
        >
          <Text style={styles.button_text}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  loginInfo: {
    flex: 1, 
    alignItems: 'center',
    borderTopLeftRadius: px(30),
    borderTopRightRadius: px(30),
    backgroundColor: colors.white,
    width: '100%',
    marginTop: px(-53),
    padding: px(15),
  },
  title: {
    fontSize: px(30), 
    fontFamily: 'playfair-semibold', 
    alignSelf: 'center',
  },
  description: {
    fontSize: px(17), 
    fontFamily: 'playfair-regular', 
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.blue_gray,
    marginTop: px(10),
  },
  image: {
    width: '100%',
    height: '79%',
  }, 
  button: {
    borderRadius: px(90),
    backgroundColor: '#E0BFB8',
    paddingVertical: px(12),
    paddingHorizontal: px(45),
    marginTop: '8%',
  },
  button_text: {
    fontSize: px(16),
    fontFamily: 'karla-semibold',
    color: colors.black
  }
})
