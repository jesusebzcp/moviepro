import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SvgMinutes = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
      stroke="#92929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 4.5V8h3.5"
      stroke="#92929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
