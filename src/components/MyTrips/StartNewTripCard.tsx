import { View, Text } from 'react-native'
import React from 'react'
import { colors, px } from '@/src/theme'
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
    const router = useRouter();
  return (
    <GestureHandlerRootView style={{
        padding: px(20),
        marginTop: px(50),
        display: 'flex',
        alignItems: 'center',
        gap: px(25)
    }}>
      <Ionicons name="location-sharp" size={24} color="black" />
      <Text style={{
        fontSize: px(25),
        fontFamily: 'palyfair-regular'
      }}>
        No trips planned yet
      </Text>
      <Text style={{
        fontSize: px(20),
        fontFamily: 'palyfair-regular',
        textAlign: 'center',
        color: colors.blue_gray,
      }}>
        Looks like it;s time to plan a new travel experience! Get Started below!
      </Text>
      <TouchableOpacity style={{
        padding: px(15),
        backgroundColor: colors.black,
        borderRadius: 15,
        paddingHorizontal: px(30),
      }}
        onPress={() => router.push('/create-trip/search-place')}
      >
        <Text style={{
            color: colors.white
        }}>
            Start a new trip!
        </Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  )
}