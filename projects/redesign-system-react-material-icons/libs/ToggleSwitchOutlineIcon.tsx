import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ToggleSwitchOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ToggleSwitchOutlineIcon ${className}`;
  return (
    <Icon alt="ToggleSwitchOutline" className={classNames} {...propsRest}>
      <path d="M17,10A2,2 0 0,1 19,12A2,2 0 0,1 17,14A2,2 0 0,1 15,12A2,2 0 0,1 17,10M17,7A5,5 0 0,1 22,12A5,5 0 0,1 17,17H7A5,5 0 0,1 2,12A5,5 0 0,1 7,7H17M7,9A3,3 0 0,0 4,12A3,3 0 0,0 7,15H17A3,3 0 0,0 20,12A3,3 0 0,0 17,9H7Z" />

    </Icon>
  );
};
ToggleSwitchOutlineIcon.displayName = 'ToggleSwitchOutlineIcon';
  