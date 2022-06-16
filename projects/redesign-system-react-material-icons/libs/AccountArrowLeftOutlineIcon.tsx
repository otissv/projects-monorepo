import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AccountArrowLeftOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AccountArrowLeftOutlineIcon ${className}`;
  return (
    <Icon alt="AccountArrowLeftOutline" className={classNames} {...propsRest}>
      <path d="M18,21L15,18L18,15V17H22V19H18V21M13,18C13,18.71 13.15,19.39 13.42,20H2V17C2,14.79 5.58,13 10,13C11,13 11.96,13.09 12.85,13.26C13.68,13.42 14.44,13.64 15.11,13.92C13.83,14.83 13,16.32 13,18M4,17V18H11C11,16.96 11.23,15.97 11.64,15.08L10,15C6.69,15 4,15.9 4,17M10,4A4,4 0 0,1 14,8A4,4 0 0,1 10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,6A2,2 0 0,0 8,8A2,2 0 0,0 10,10A2,2 0 0,0 12,8A2,2 0 0,0 10,6Z" />

    </Icon>
  );
};
AccountArrowLeftOutlineIcon.displayName = 'AccountArrowLeftOutlineIcon';
  