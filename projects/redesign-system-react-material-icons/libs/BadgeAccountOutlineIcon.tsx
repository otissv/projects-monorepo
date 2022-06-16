import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BadgeAccountOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BadgeAccountOutlineIcon ${className}`;
  return (
    <Icon alt="BadgeAccountOutline" className={classNames} {...propsRest}>
      <path d="M17,3H14V5H17V21H7V5H10V3H7A2,2 0 0,0 5,5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V5A2,2 0 0,0 17,3M12,7A2,2 0 0,1 14,9A2,2 0 0,1 12,11A2,2 0 0,1 10,9A2,2 0 0,1 12,7M16,15H8V14C8,12.67 10.67,12 12,12C13.33,12 16,12.67 16,14V15M16,18H8V17H16V18M12,20H8V19H12V20M13,5H11V1H13V5Z" />

    </Icon>
  );
};
BadgeAccountOutlineIcon.displayName = 'BadgeAccountOutlineIcon';
  