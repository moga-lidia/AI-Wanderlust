import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { useCreateTripContext } from '@/src/context/CreateTripContext';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SelectBudgetOptions } from '@/src/constants/Options';
import OptionCard, { OptionCardType } from '@/src/components/CreateTrip/OptionCard';
import { colors } from '@/src/theme/colors';

export default function SelectBudget() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState<OptionCardType>();
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
        setTripData({...tripData, budget: selectedOption?.title})
    }, [selectedOption]);

    const onClickContinue = () => {
        if(!selectedOption) {
            ToastAndroid.show('Please Start and End Date', ToastAndroid.BOTTOM);
            return;
        }
        router.push('/');
    }
  return (
    <GestureHandlerRootView style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: colors.white,
    }}>
      <Text style={{
        fontFamily: '',
        fontSize: 35,
        marginTop: 20,
      }}>Budget</Text>
    <View>
    <Text style={{
        fontSize: 20,
        fontFamily: '',
        marginTop: 20,
      }}>How much do you want to spend?</Text>
        <FlatList 
            data={SelectBudgetOptions} 
            renderItem={({ item, index }) => 
            <TouchableOpacity 
                onPress={() => setSelectedOption(item)}
                style={{marginVertical: 10}}>
                <OptionCard option={item} selectedOption={selectedOption!}/>
                </TouchableOpacity>}        
        />
    </View>
    <TouchableOpacity style={{
        padding: 15,
        backgroundColor: colors.black,
        borderRadius: 15,
        marginTop: 20
      }}
        onPress={() => onClickContinue()}>
        <Text style={{
            textAlign: 'center',
            color: colors.white,
            fontSize: 20,
            fontFamily: '',
        }}>
            Continue
        </Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  )
}