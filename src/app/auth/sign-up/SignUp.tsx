import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import { colors, px } from '@/src/theme';
import { styles } from '../sign-in/SignIn';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUp() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
        }, []);

  return (
    <View style={{padding: px(25), paddingTop: px(50), backgroundColor: colors.white}}>
      <TouchableOpacity onPress={() => router.back()}>
       <Ionicons style={{marginVertical: px(20)}} name="arrow-back-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'karla-bold',
        fontSize: px(30),
        backgroundColor: colors.white,
        height: '100%',
      }}>Create New Account</Text>
      <View style={{marginTop: px(15)}}>
        <Text style={{fontFamily: 'palyfair-semibold'}}>Full name</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Full Name'/>
      </View>
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
          Create Account
        </Text>
      </View>
      <TouchableOpacity onPress={() => router.replace('/auth/sign-in/SignIn')} style={{padding: px(15), borderRadius: 15, backgroundColor: colors.white, borderWidth: 1, marginTop: px(20)}}>
        <Text style={{color: colors.black, textAlign: 'center'}}>
        Sign In
        </Text>
      </TouchableOpacity>
    </View>
  )
}