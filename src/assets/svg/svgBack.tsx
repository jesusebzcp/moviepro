import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SvgBack = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M12.68 17.5a.65.65 0 0 1-.462-.19l-5.69-5.641a2.356 2.356 0 0 1 0-3.34l5.69-5.64a.663.663 0 0 1 .925 0 .649.649 0 0 1 0 .916l-5.69 5.641a1.059 1.059 0 0 0 0 1.506l5.69 5.64a.649.649 0 0 1 0 .918.689.689 0 0 1-.462.19Z"
      fill="#fff"
    />
  </Svg>
);
