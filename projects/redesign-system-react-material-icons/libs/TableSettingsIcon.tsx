import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TableSettingsIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TableSettingsIcon ${className}`;
  return (
    <Icon alt="TableSettings" className={classNames} {...propsRest}>
      <path d="M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />

    </Icon>
  );
};
TableSettingsIcon.displayName = 'TableSettingsIcon';
  