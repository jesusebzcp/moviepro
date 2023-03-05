import {COLORS} from '@/theme';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SvgClose = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m6 6 12.774 12.774M6 18.774 18.774 6"
      stroke={COLORS.white}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
