import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BadgeAccountAlertOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BadgeAccountAlertOutlineIcon ${className}`;
  return (
    <Icon alt="BadgeAccountAlertOutline" className={classNames} {...propsRest}>
      <path d="M15,3H12V5H15V21H5V5H8V3H5A2,2 0 0,0 3,5V21A2,2 0 0,0 5,23H15A2,2 0 0,0 17,21V5A2,2 0 0,0 15,3M10,7A2,2 0 0,1 12,9A2,2 0 0,1 10,11A2,2 0 0,1 8,9A2,2 0 0,1 10,7M14,15H6V14C6,12.67 8.67,12 10,12C11.33,12 14,12.67 14,14V15M14,18H6V17H14V18M10,20H6V19H10V20M11,5H9V1H11V5M19,13V7H21V13H19M19,17V15H21V17H19Z" />

    </Icon>
  );
};
BadgeAccountAlertOutlineIcon.displayName = 'BadgeAccountAlertOutlineIcon';
  