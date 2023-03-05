import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

export const SvgEye = (props: SvgProps) => (
  <Svg
    className="icon icon-tabler icon-tabler-eye"
    width={24}
    height={24}
    strokeWidth={1.5}
    stroke="#fff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Circle cx={12} cy={12} r={2} />
    <Path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7" />
  </Svg>
);
