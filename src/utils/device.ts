import {Dimensions, PixelRatio} from 'react-native';
let pixelDensity = PixelRatio.get();

const {width, height} = Dimensions.get('screen');

export function isTablet() {
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 2000)) {
    return true;
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
  }
}
