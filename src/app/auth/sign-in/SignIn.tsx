import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {useRouter} from 'expo-router';
import { colors, px } from '@/src/theme';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);
  return (
    <View style={{padding: px(25), marginTop: px(25), backgroundColor: colors.white, paddingTop: px(50)}}>
      <Text style={{fontFamily: 'karla-bold', fontSize: px(30)}}>Let's sign you in</Text>
      <Text style={{fontFamily: 'karla-light', fontSize: px(30), marginTop: px(10)}}>Welcome back!</Text>
      <Text style={{fontFamily: 'karla-light', fontSize: px(30), marginTop: px(10)}}>Happy to see you here.</Text>
      <View style={{marginTop: px(15)}}>
        <Text style={{fontFamily: 'palyfair-semibold'}}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter Email'/>
      </View>
      <View style={{marginTop: px(15)}}>
        <Text style={{fontFamily: 'palyfair-semibold'}}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password'/>
      </View>
      <View style={{padding: px(15), borderRadius: 15, backgroundColor: colors.black, marginTop: px(40)}}>
        <Text style={{color: colors.white, textAlign: 'center'}}>
          Sign In
        </Text>
      </View>
      <TouchableOpacity onPress={() => router.replace('/auth/sign-up/SignUp')} style={{padding: px(15), borderRadius: 15, backgroundColor: colors.white, borderWidth: 1, marginTop: px(20)}}>
        <Text style={{color: colors.black, textAlign: 'center'}}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: px(10),
    borderColor: colors.gradient_dark_gray,
    borderWidth: px(5),
    borderRadius: px(15),
    fontFamily: 'palyfair-regular'
  }
})
