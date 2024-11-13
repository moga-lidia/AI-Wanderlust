import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { useCreateTripContext } from '@/src/context/CreateTripContext';
import { colors } from '@/src/theme';
import CalendarPicker from 'react-native-calendar-picker';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import moment, { Moment } from 'moment';

export default function SelectDates(this: any) {
    const navigation = useNavigation();
    const { tripData, setTripData } = useCreateTripContext();
    const router = useRouter();
    const [startDate, setStartDate] = useState<Moment | null>(null);
    const [endDate, setEndDate] = useState<Moment | null>(null);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }, []);

    const onDateChange = (date: moment.MomentInput, type: string) => {
        const newDate = moment(date);
        if(type === 'START_DATE') {
            setStartDate(newDate);
        } else {
            setEndDate(newDate);
        }
    }

    const onDateSelectionContinue = () => {
        if(!startDate && !endDate) {
            ToastAndroid.show('Please Start and End Date', ToastAndroid.BOTTOM);
            return;
        }
        const totalNumberOfDays = endDate?.diff(startDate, 'days');
        setTripData({...tripData, 
            startDate: startDate,
            endDate: endDate,
            totalNumberOfDays: totalNumberOfDays,
        })
        router.push('/create-trip/select-budget');
    }
    
  return (
    <GestureHandlerRootView style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: colors.white,
        height: '100%',
    }}>
      <Text style={{
        fontSize: 35,
        // fontFamily: '',
        marginTop: 20,
      }}>Select Dates</Text>
      <View style={{
        marginTop: 30,
      }}>
      <CalendarPicker 
        allowRangeSelection={true}
        minDate={new Date()}
        maxRangeDuration={5}
        selectedRangeStyle={{backgroundColor: colors.black}}
        selectedDayTextStyle={{color: colors.white}}
        onDateChange={onDateChange} />
      </View>
      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: colors.black,
        borderRadius: 15,
        marginTop: 20
      }}
          onPress={onDateSelectionContinue}>
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