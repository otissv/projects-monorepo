import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BadgeAccountAlertIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BadgeAccountAlertIcon ${className}`;
  return (
    <Icon alt="BadgeAccountAlert" className={classNames} {...propsRest}>
      <path d="M15,3H12V6H8V3H5A2,2 0 0,0 3,5V21A2,2 0 0,0 5,23H15A2,2 0 0,0 17,21V5A2,2 0 0,0 15,3M10,8A2,2 0 0,1 12,10A2,2 0 0,1 10,12A2,2 0 0,1 8,10A2,2 0 0,1 10,8M14,16H6V15C6,13.67 8.67,13 10,13C11.33,13 14,13.67 14,15V16M11,5H9V1H11V5M14,19H6V18H14V19M10,21H6V20H10V21M19,13V7H21V13H19M19,17V15H21V17H19Z" />

    </Icon>
  );
};
BadgeAccountAlertIcon.displayName = 'BadgeAccountAlertIcon';
  