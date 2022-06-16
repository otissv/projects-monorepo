import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const Numeric7BoxOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `Numeric7BoxOutlineIcon ${className}`;
  return (
    <Icon alt="Numeric7BoxOutline" className={classNames} {...propsRest}>
      <path d="M11,17L15,9V7H9V9H13L9,17M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

    </Icon>
  );
};
Numeric7BoxOutlineIcon.displayName = 'Numeric7BoxOutlineIcon';
  