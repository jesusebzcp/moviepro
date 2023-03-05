import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SvgTicket = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M6 3.5v9M1.5 10.45a.499.499 0 0 1 .4-.49 2 2 0 0 0 0-3.92.5.5 0 0 1-.4-.49V4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v1.55a.5.5 0 0 1-.4.49 2 2 0 0 0 0 3.92.5.5 0 0 1 .4.49V12a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-1.55Z"
      stroke="#92929D"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
