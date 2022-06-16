import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MagnetIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MagnetIcon ${className}`;
  return (
    <Icon alt="Magnet" className={classNames} {...propsRest}>
      <path d="M3,7V13A9,9 0 0,0 12,22A9,9 0 0,0 21,13V7H17V13A5,5 0 0,1 12,18A5,5 0 0,1 7,13V7M17,5H21V2H17M3,5H7V2H3" />

    </Icon>
  );
};
MagnetIcon.displayName = 'MagnetIcon';
  