import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { colors } from '@/src/theme/colors';
import { px } from '@/src/theme';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import "react-native-get-random-values";
import { useCreateTripContext } from '@/src/context/CreateTripContext';

export default function SearchPlace() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useCreateTripContext();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search',
        })
    }, [])

  return (
    <View style={{
        padding: px(25),
        paddingTop: px(75),
        backgroundColor: colors.white,
        height: '100%',
    }}>
       <GooglePlacesAutocomplete
            placeholder='Search Place'
            fetchDetails={true}
            onPress={(data, details = null) => {
                console.log(process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY);
                setTripData({
                    locationInfo: {
                        name: data.description,
                        coordinates: details?.geometry.location,
                        photoRef: details?.icon,
                        url: details?.photos[0].photo_reference,
                    }
                });
                router.push('/create-trip/select-traveler');
            }}
            query={{
                key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                language: 'en',
            }}
            styles={{
                textInputContainer: {
                    borderWidth: 1,
                    borderRadius: 5,
                    marginTop: 50,
                    height: px(41),
                }
            }}
        />
    </View>
  )
}