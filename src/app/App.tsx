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
import {colors} from '../theme';
import {ThemeProvider} from '../theme/paper';
import Login from '../components/Login';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.safeArea]}>
          <StatusBar animated={true} backgroundColor={colors.primary} />
          <Login/>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
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
  },
});

export default App;
