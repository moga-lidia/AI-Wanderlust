import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors } from '@/src/theme/colors'
import { px } from '@/src/theme'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '@/src/components/MyTrips/StartNewTripCard';

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  return (
    <View style={{
      padding: px(25),
      paddingTop: px(25),
      backgroundColor: colors.white,
      height: '100%',
    }}>
      <View 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
         <Text style={{
          fontFamily: 'palyfair-bold',
          fontSize: px(35),
         }}>My Trip</Text>
         <Ionicons name="add-sharp" size={50} color="black" />
      </View>
      {userTrips.length === 0 ? 
      <StartNewTripCard/> : null
      }
    </View>
  )
}