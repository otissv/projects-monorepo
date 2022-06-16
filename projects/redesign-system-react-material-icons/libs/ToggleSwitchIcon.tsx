import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ToggleSwitchIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ToggleSwitchIcon ${className}`;
  return (
    <Icon alt="ToggleSwitch" className={classNames} {...propsRest}>
      <path d="M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z" />

    </Icon>
  );
};
ToggleSwitchIcon.displayName = 'ToggleSwitchIcon';
  