import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}>

      <Rect width="20" height="5" x="2" y="3" rx="1" stroke={color} />
      <Path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" stroke={color} />
      <Path d="m9.5 17 5-5" stroke={color} />
      <Path d="m9.5 12 5 5" stroke={color} />
    </Svg>);

};

Icon.displayName = 'ArchiveX';

export const ArchiveX = React.memo<IconProps>(themed(Icon));