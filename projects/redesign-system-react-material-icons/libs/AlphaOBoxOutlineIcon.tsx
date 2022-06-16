import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlphaOBoxOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlphaOBoxOutlineIcon ${className}`;
  return (
    <Icon alt="AlphaOBoxOutline" className={classNames} {...propsRest}>
      <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />

    </Icon>
  );
};
AlphaOBoxOutlineIcon.displayName = 'AlphaOBoxOutlineIcon';
  