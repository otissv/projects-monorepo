import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AccountSwitchIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AccountSwitchIcon ${className}`;
  return (
    <Icon alt="AccountSwitch" className={classNames} {...propsRest}>
      <path d="M16 9C22 9 22 13 22 13V15H16V13C16 13 16 11.31 14.85 9.8C14.68 9.57 14.47 9.35 14.25 9.14C14.77 9.06 15.34 9 16 9M2 13C2 13 2 9 8 9S14 13 14 13V15H2V13M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17M8 1C6.34 1 5 2.34 5 4S6.34 7 8 7 11 5.66 11 4 9.66 1 8 1M16 1C14.34 1 13 2.34 13 4S14.34 7 16 7 19 5.66 19 4 17.66 1 16 1Z" />

    </Icon>
  );
};
AccountSwitchIcon.displayName = 'AccountSwitchIcon';
  