import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TabletDashboardIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TabletDashboardIcon ${className}`;
  return (
    <Icon alt="TabletDashboard" className={classNames} {...propsRest}>
      <path d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4M7,8H13V13H7V8M14,8H17V10H14V8M17,11V16H14V11H17M7,14H13V16H7V14Z" />

    </Icon>
  );
};
TabletDashboardIcon.displayName = 'TabletDashboardIcon';
  