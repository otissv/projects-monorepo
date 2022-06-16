import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SquareOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SquareOutlineIcon ${className}`;
  return (
    <Icon alt="SquareOutline" className={classNames} {...propsRest}>
      <path d="M3,3H21V21H3V3M5,5V19H19V5H5Z" />

    </Icon>
  );
};
SquareOutlineIcon.displayName = 'SquareOutlineIcon';
  