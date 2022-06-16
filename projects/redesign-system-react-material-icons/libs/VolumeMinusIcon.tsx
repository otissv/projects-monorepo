import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const VolumeMinusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `VolumeMinusIcon ${className}`;
  return (
    <Icon alt="VolumeMinus" className={classNames} {...propsRest}>
      <path d="M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z" />

    </Icon>
  );
};
VolumeMinusIcon.displayName = 'VolumeMinusIcon';
  