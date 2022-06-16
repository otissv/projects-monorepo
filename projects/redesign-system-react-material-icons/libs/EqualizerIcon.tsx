import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EqualizerIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EqualizerIcon ${className}`;
  return (
    <Icon alt="Equalizer" className={classNames} {...propsRest}>
      <path d="M10,20H14V4H10V20M4,20H8V12H4V20M16,9V20H20V9H16Z" />

    </Icon>
  );
};
EqualizerIcon.displayName = 'EqualizerIcon';
  