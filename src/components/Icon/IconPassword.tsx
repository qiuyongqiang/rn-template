/* tslint:disable */
/* eslint-disable */

import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgXml } from 'react-native-svg';
import { getIconColor } from './helper';
import { helpers } from '@td-design/react-native';
const { px } = helpers;

export interface IconfontProps extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconPassword: FC<IconfontProps> = ({ size, color, ...rest }) => {
  const xml = `
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00291 1.00216C6.05414 1.00216 4.47401 2.56849 4.47281 4.50144V5.90187H4.11748C2.94803 5.90187 2 6.84221 2 8.00216V12.9033C2.002 14.0619 2.94944 15 4.11748 15H11.8818C13.051 15.0004 13.9992 14.0608 14 12.9012V8C13.9992 6.84032 13.051 5.90075 11.8818 5.90115V5.90187H11.5294V4.50144C11.5298 2.56833 9.95039 1.0008 8.00145 1L8.00291 1.00216ZM11.5294 5.90187H4.47281V6.95202H4.11748C3.53275 6.95202 3.05874 7.42218 3.05874 8.00216V12.9033C3.05914 13.483 3.53303 13.9527 4.11748 13.9527H11.8818C12.1625 13.9529 12.4318 13.8425 12.6304 13.6456C12.829 13.4488 12.9405 13.1818 12.9405 12.9033V8.00216C12.9401 7.42207 12.4659 6.95202 11.8811 6.95202H11.5294V5.90187ZM10.4714 4.50288C10.4714 3.14947 9.36522 2.05231 8.00073 2.05231L8.00291 2.05159C6.63841 2.05159 5.53228 3.14875 5.53228 4.50216V5.90115H10.4714V4.50288ZM7.62914 11.8768C7.72835 11.9749 7.8628 12.0299 8.00291 12.0298V12.0262C8.29519 12.0258 8.53191 11.7906 8.53191 11.5007V9.40187C8.53187 9.11212 8.29503 8.87725 8.00291 8.87725C7.71078 8.87725 7.47395 9.11212 7.4739 9.40187V11.5065C7.47409 11.6455 7.52994 11.7787 7.62914 11.8768Z" fill="${getIconColor(
      color,
      1,
      '#333333',
    )}"/>
  </svg>
`;

  return <SvgXml xml={xml} width={size} height={size} {...rest} />;
};

IconPassword.defaultProps = {
  size: px(16),
};

IconPassword = React.memo ? React.memo(IconPassword) : IconPassword;

export default IconPassword;
