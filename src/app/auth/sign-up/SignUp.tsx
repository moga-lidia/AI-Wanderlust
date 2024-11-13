import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation } from 'expo-router'
import { colors, px } from '@/src/theme';
import { styles } from '../sign-in/SignIn';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './../../../../configs/FirebaseConfig';

export default function SignUp() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
        }, []);
    
    const onCreateAccount = () => {
      if(email.length > 0 && password.length > 0 && fullName.length > 0) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('user', user);
          router.replace('/(tabs)/MyTrip');
        })
        .catch((error) => {
          console.log('err', error);
        });
      }
      else {
        ToastAndroid.show('Field missing', ToastAndroid.BOTTOM);
        return;
      }
    }
  return (
    <View style={{padding: px(25), paddingTop: px(50), backgroundColor: colors.white, height: '100%'}}>
      <TouchableOpacity onPress={() => router.back()}>
       <Ionicons style={{marginVertical: px(20)}} name="arrow-back-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'karla-bold',
        fontSize: px(30),
        backgroundColor: colors.white,
      }}>Create New Account</Text>
      <View style={{marginTop: px(15)}}>
        <Text style={{fontFamily: 'palyfair-semibold'}}>Full name</Text>
        <TextInput 
        onChangeText={(value) => setFullName(value)} 
        style={styles.input} placeholder='Enter Full Name'/>
      </View>
      <View style={{marginTop: px(15)}}>
        <Text style={{fontFamily: 'palyfair-semibold'}}>Email</Text>
        <TextInput 
        onChangeText={(value) => setEmail(value)} 
        style={styles.input} placeholder='Enter Email'/>
      </View>
      <View style={{marginTop: px(15)}}>
        <Text style={{fontFamily: 'palyfair-semibold'}}>Password</Text>
        <TextInput 
        onChangeText={(value) => setPassword(value)} 
        secureTextEntry={true} style={styles.input} placeholder='Enter Password'/>
      </View>
      <TouchableOpacity onPress={onCreateAccount} style={{padding: px(15), borderRadius: 15, backgroundColor: colors.black, marginTop: px(40)}}>
        <Text style={{color: colors.white, textAlign: 'center'}}>
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace('/auth/sign-in/SignIn')} style={{padding: px(15), borderRadius: 15, backgroundColor: colors.white, borderWidth: 1, marginTop: px(20)}}>
        <Text style={{color: colors.black, textAlign: 'center'}}>
        Sign In
        </Text>
      </TouchableOpacity>
    </View>
  )
}