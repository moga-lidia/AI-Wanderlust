import {Dimensions, PixelRatio, Platform, StyleSheet} from 'react-native';
import {isTablet} from './../utils/device';
import {colors} from './colors';
const dimensions = Dimensions.get('screen');

const screenDimensions = {
  width: Math.min(dimensions.width, dimensions.height),
  height: Math.max(dimensions.width, dimensions.height),
};

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

/**@public */
export function scale(value: number) {
  return (screenDimensions.width / guidelineBaseWidth) * value;
}
/**@public */
export function verticalScale(value: number) {
  return (screenDimensions.height / guidelineBaseHeight) * value;
}
/**@public */
export function moderateScale(value: number, factor = 0.5) {
  return value + (scale(value) - value) * factor;
}

export function px(value: number) {
  if (isTablet()) {
    return PixelRatio.roundToNearestPixel(moderateScale(value, 0.2));
  }
  if (Platform.OS === 'ios') {
    return PixelRatio.roundToNearestPixel(scale(value));
  }
  return PixelRatio.roundToNearestPixel(scale(value)) - 2;
}

export const globalStyles = StyleSheet.create({
  simpleText: {
    fontWeight: '400',
    fontSize: px(16),
    letterSpacing: 0.7, // it's just a guess, tbh
    color: colors.generic_text,
    fontFamily: 'Roboto',
  },
  button: {
    paddingHorizontal: px(12),
    paddingVertical: px(7),
    elevation: 2,
    backgroundColor: colors.primary,
  },
  mainLayout: {
    flex: 1,
    paddingHorizontal: isTablet() ? px(48) : px(16),
    paddingVertical: Platform.select({
      android: px(32),
      ios: px(16),
    }),
    alignItems: 'center',
    marginHorizontal: isTablet() ? px(42) : px(21),
    marginVertical: Platform.select({
      android: px(7),
      ios: px(7),
    }),
  },
  get padding() {
    return {
      paddingHorizontal: this.mainLayout.paddingHorizontal,
      paddingVertical: this.mainLayout.paddingVertical,
    };
  },
  get margin() {
    return {
      marginHorizontal: this.mainLayout.marginHorizontal,
      marginVertical: this.mainLayout.marginVertical,
    };
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export * from './colors';
