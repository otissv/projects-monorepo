import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const VibrateIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `VibrateIcon ${className}`;
  return (
    <Icon alt="Vibrate" className={classNames} {...propsRest}>
      <path d="M16,19H8V5H16M16.5,3H7.5A1.5,1.5 0 0,0 6,4.5V19.5A1.5,1.5 0 0,0 7.5,21H16.5A1.5,1.5 0 0,0 18,19.5V4.5A1.5,1.5 0 0,0 16.5,3M19,17H21V7H19M22,9V15H24V9M3,17H5V7H3M0,15H2V9H0V15Z" />

    </Icon>
  );
};
VibrateIcon.displayName = 'VibrateIcon';
  