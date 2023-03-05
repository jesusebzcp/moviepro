import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const METRICS = {
  spacingHorizontal: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  separatorHorizontal: 15,
};
