import { View, Text, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { colors } from '@/src/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCreateTripContext } from '@/src/context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useCreateTripContext();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }, []);

  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: colors.white,
        height: '100%',
    }}>
      <Text style={{
        fontFamily: '',
        fontSize: 35,
        marginTop: 20,
      }}>Review Your Trip</Text>
       <View style={{
            marginTop: 20,
        }}>
        <Text style={{
            fontFamily: '',
            fontSize: 20,
        }}>Before generating your trip, please review your selection!</Text>
        <View style={{
                marginTop: 40,
                display: 'flex',
                flexDirection: 'row',
            }}>
            <Text style={{
                fontFamily: '',
                fontSize: 30,
                color: colors.black,
            }}>📍</Text>
            <View style={{marginLeft: 15}}>
                <Text style={{
                    fontFamily: '',
                    fontSize: 20,
                    color: colors.black,
                }}>Destination</Text>
                <Text style={{
                    fontFamily: '',
                    fontSize: 20,
                }}>{tripData.locationInfo.name}</Text>
            </View>
        </View>
        
        <View style={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'row',
            }}>
            <Text style={{
                fontFamily: '',
                fontSize: 30,
                color: colors.black,
            }}>📅</Text>
            <View style={{marginLeft: 15}}>
                <Text style={{
                    fontFamily: '',
                    fontSize: 20,
                    color: colors.black,
                }}>Travel Date</Text>
                <Text style={{
                    fontFamily: '',
                    fontSize: 20,
                }}>{moment(tripData.startDate).format('DD MMM')+' - '+moment(tripData.endDate).format('DD MMM')}  ({tripData.totalNumberOfDays} days)</Text>
            </View>
        </View>

        <View style={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'row',
            }}>
            <Text style={{
                fontFamily: '',
                fontSize: 30,
                color: colors.black,
            }}>🚌</Text>
            <View style={{marginLeft: 15}}>
                <Text style={{
                    fontFamily: '',
                    fontSize: 20,
                    color: colors.black,
                }}>Who is traveling?</Text>
                <Text style={{
                    fontFamily: '',
                    fontSize: 20,
                }}>{tripData.traveler.title}</Text>
            </View>
        </View>

        <View style={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'row',
            }}>
            <Text style={{
                fontFamily: '',
                fontSize: 30,
                color: colors.black,
            }}>💰</Text>
            <View style={{marginLeft: 15}}>
                <Text style={{
                    fontFamily: '',
                    fontSize: 20,
                    color: colors.black,
                }}>Budget</Text>
                <Text style={{
                    fontFamily: '',
                    fontSize: 20,
                }}>{tripData.budget}</Text>
            </View>
        </View>
        </View>

        <TouchableOpacity style={{
            padding: 15,
            backgroundColor: colors.black,
            borderRadius: 15,
            marginTop: 40
        }}
            //   onPress={onDateSelectionContinue}
            >
            <Text style={{
                textAlign: 'center',
                color: colors.white,
                fontSize: 20,
                fontFamily: '',
            }}>
                Build My Trip
            </Text>
      </TouchableOpacity>
    </View>
  )
}