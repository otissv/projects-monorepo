import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const Numeric6BoxOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `Numeric6BoxOutlineIcon ${className}`;
  return (
    <Icon alt="Numeric6BoxOutline" className={classNames} {...propsRest}>
      <path d="M11,13H13V15H11M11,17H13A2,2 0 0,0 15,15V13C15,11.89 14.1,11 13,11H11V9H15V7H11A2,2 0 0,0 9,9V15C9,16.11 9.9,17 11,17M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

    </Icon>
  );
};
Numeric6BoxOutlineIcon.displayName = 'Numeric6BoxOutlineIcon';
  