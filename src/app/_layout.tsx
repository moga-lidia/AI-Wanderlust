import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import React from "react";

export default function RootLayout() {

  useFonts({
    'karla-bold': require('./../../assets/fonts/Karla-Bold.ttf'),
    'karla-light': require('./../../assets/fonts/Karla-Light.ttf'),
    'karla': require('./../../assets/fonts/Karla-Regular.ttf'),
    'karla-semibold': require('./../../assets/fonts/Karla-SemiBold.ttf'),
    'playfair-bold': require('./../../assets/fonts/PlayfairDisplay-Bold.ttf'),
    'palyfair-regular': require('./../../assets/fonts/PlayfairDisplay-Regular.ttf'),
    'playfair-semibold': require('./../../assets/fonts/PlayfairDisplay-SemiBold.ttf'),
  })
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='(tabs)' options={{headerShown: false}}></Stack.Screen>
    </Stack>
  );
}
