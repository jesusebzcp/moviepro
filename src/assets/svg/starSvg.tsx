import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {COLORS} from '@/theme';

export const StarSvg = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="m8.276 11.92 3.152 1.998c.403.255.903-.124.783-.595l-.91-3.582a.548.548 0 0 1 .177-.555l2.827-2.353c.371-.31.18-.925-.298-.956l-3.691-.24a.526.526 0 0 1-.453-.334L8.486 1.835a.52.52 0 0 0-.972 0L6.137 5.303a.526.526 0 0 1-.453.334l-3.691.24c-.478.03-.67.647-.298.956l2.827 2.353a.547.547 0 0 1 .177.555l-.844 3.322c-.144.564.456 1.02.94.714l2.93-1.856a.513.513 0 0 1 .55 0v0Z"
      stroke={COLORS.start}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
