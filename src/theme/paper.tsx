import React from 'react';
import {
  PaperProvider,
  Props,
  MD3LightTheme,
  configureFonts,
} from 'react-native-paper';
import {PropsWithChildren} from 'react';
import {colors} from './colors';
import {globalStyles} from './index';

const fontConfig = {
  fontFamily: globalStyles.simpleText.fontFamily,
  letterSpacing: globalStyles.simpleText.letterSpacing,
};

const theme: Props['theme'] = {
  ...MD3LightTheme,
  roundness: 1.5,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.tertiary,
  },
};

export function ThemeProvider({children}: PropsWithChildren) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
