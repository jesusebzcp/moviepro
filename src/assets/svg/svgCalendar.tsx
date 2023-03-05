import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SvgCalendar = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M13 2.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM11 1.5v2M5 1.5v2M2.5 5.5h11"
      stroke="#92929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
