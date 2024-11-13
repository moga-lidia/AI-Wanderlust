/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import {colors, px} from '../theme';
import Login from '../components/Login';

function App(): JSX.Element {
  return (
    // <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea]}>
        <StatusBar animated={true} backgroundColor={colors.white} />
        <Login/>
      </SafeAreaView>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  updatingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.blueStatus,
    width: '100%',
    marginTop: px(-50),
  },
});

export default App;
