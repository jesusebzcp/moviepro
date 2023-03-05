import {Dimensions, PixelRatio, Platform, TextStyle} from 'react-native';
import {COLORS} from './colors';

export enum TypeSizeFont {
  H1 = 27,
  H2 = 18,
  H3 = 16,
  H4 = 15,
  H5 = 14,
  H6 = 12,
  TITLE = 120,
}

export type AlignFont = 'left' | 'center' | 'right';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 374;

const normalize = (sizeParams: number) => {
  const newSize = sizeParams * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
};
const size = {
  h1: normalize(TypeSizeFont.H1),
  h2: normalize(TypeSizeFont.H2),
  h3: normalize(TypeSizeFont.H3),
  h4: normalize(TypeSizeFont.H4),
  h5: normalize(TypeSizeFont.H5),
  h6: normalize(TypeSizeFont.H6),
  title: normalize(TypeSizeFont.TITLE),
};
const style = {
  bold: (color: string, mySize = size.h6, align: AlignFont): TextStyle => ({
    color: color ? color : COLORS.white,
    fontSize: mySize ? mySize : size.h6,
    textAlign: align ? align : 'left',
    fontWeight: 'bold',
  }),
  regular: (color: string, mySize = size.h6, align: AlignFont) => ({
    color: color ? color : COLORS.white,
    fontSize: mySize ? mySize : size.h6,
    textAlign: align ? align : 'left',
  }),
  medium: (color: string, mySize = size.h6, align: AlignFont) => ({
    color: color ? color : COLORS.white,
    fontSize: mySize ? mySize : size.h6,
    textAlign: align ? align : 'left',
  }),
  underline: (color: string, mySize = size.h6, align: AlignFont) => ({
    color: color ? color : COLORS.white,
    fontSize: mySize ? mySize : size.h6,
    textAlign: align ? align : 'left',
    textDecorationLine: 'underline' ?? 'underline',
  }),
};
export const FONTS = {size, style};
