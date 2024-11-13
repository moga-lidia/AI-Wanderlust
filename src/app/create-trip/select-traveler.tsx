import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { colors } from '@/src/theme';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SelectTravelersList } from '@/src/constants/Options';
import OptionCard, { OptionCardType } from '@/src/components/CreateTrip/OptionCard';
import { useCreateTripContext } from '@/src/context/CreateTripContext';

export default function SelectTraveler() {
    const navigation = useNavigation();
    const [selectedTraveler, setSelectedTraveler] = useState<OptionCardType>();
    const { tripData, setTripData } = useCreateTripContext();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }, []);

    useEffect(() => {
        setTripData({...tripData, traveler: selectedTraveler})
    }, [selectedTraveler]);

  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: colors.white,
        height: '100%',
    }}>
      <Text style={{
        fontSize: 35,
        // fontFamily: '',
        marginTop: 25,
      }}>Who's traveling</Text>
      <GestureHandlerRootView style={{marginTop: 20}}>
        <Text style={{
            // fontFamily: '',
            fontSize: 20,
        }}>
            Choose your travelers
        </Text>
        <FlatList 
            data={SelectTravelersList} 
            renderItem={({ item, index }) => 
            <TouchableOpacity 
                onPress={() => setSelectedTraveler(item)}
                style={{marginVertical: 10}}>
                <OptionCard option={item} selectedTraveler={selectedTraveler!}/>
                </TouchableOpacity>}        
        />
      </GestureHandlerRootView>
      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: colors.black,
        borderRadius: 15,
        marginTop: 20
      }}
        onPress={() => router.push('/create-trip/select-dates')}>
        <Text style={{
            textAlign: 'center',
            color: colors.white,
            fontSize: 20,
            fontFamily: '',
        }}>
            Continue
        </Text>
      </TouchableOpacity>
    </View>
  )
}