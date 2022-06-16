import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlphaABoxOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlphaABoxOutlineIcon ${className}`;
  return (
    <Icon alt="AlphaABoxOutline" className={classNames} {...propsRest}>
      <path d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11Z" />

    </Icon>
  );
};
AlphaABoxOutlineIcon.displayName = 'AlphaABoxOutlineIcon';
  