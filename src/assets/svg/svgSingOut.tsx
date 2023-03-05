import {COLORS} from '@/theme';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SvgSingOut = (props: SvgProps) => (
  <Svg width={22} height={20} fill="none" {...props}>
    <Path
      d="M7.78 1.6H4.074c-.561 0-1.1.221-1.497.615s-.62.928-.62 1.485v12.6c0 .557.223 1.091.62 1.485.397.394.936.615 1.497.615H7.78m.263-8.4h12m0 0-4.585-4.8m4.585 4.8-4.585 4.8"
      stroke={COLORS.white}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
