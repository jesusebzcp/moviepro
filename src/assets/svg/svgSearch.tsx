import {COLORS} from '@/theme';
import * as React from 'react';
import Svg, {SvgProps, Ellipse, Path} from 'react-native-svg';

export const SvgSearch = (props: SvgProps) => (
  <Svg width={19} height={18} fill="none" {...props}>
    <Ellipse
      cx={7.572}
      cy={7.482}
      rx={7.572}
      ry={7.482}
      transform="matrix(-1 0 0 1 17.178 1)"
      stroke={COLORS.primary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.34 14.074 1.37 17"
      stroke={COLORS.primary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
