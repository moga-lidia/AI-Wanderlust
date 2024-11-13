import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/src/theme/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.black,
    }}
    >
        <Tabs.Screen name="MyTrip" 
          options={{
            tabBarLabel: 'My Trip',
            tabBarIcon: ({}) => <Ionicons name="location-sharp" size={24}/>
          }}
        />
        <Tabs.Screen name="Discover" 
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({}) => <Ionicons name="earth" size={24} color="black" />
          }}
        />
        <Tabs.Screen name="Profile" 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({}) => <Ionicons name="people" size={24} color="black" />
          }}/>
    </Tabs>
  )
}