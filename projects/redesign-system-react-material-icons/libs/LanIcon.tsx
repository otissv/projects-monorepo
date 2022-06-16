import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const LanIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `LanIcon ${className}`;
  return (
    <Icon alt="Lan" className={classNames} {...propsRest}>
      <path d="M10,2C8.89,2 8,2.89 8,4V7C8,8.11 8.89,9 10,9H11V11H2V13H6V15H5C3.89,15 3,15.89 3,17V20C3,21.11 3.89,22 5,22H9C10.11,22 11,21.11 11,20V17C11,15.89 10.11,15 9,15H8V13H16V15H15C13.89,15 13,15.89 13,17V20C13,21.11 13.89,22 15,22H19C20.11,22 21,21.11 21,20V17C21,15.89 20.11,15 19,15H18V13H22V11H13V9H14C15.11,9 16,8.11 16,7V4C16,2.89 15.11,2 14,2H10M10,4H14V7H10V4M5,17H9V20H5V17M15,17H19V20H15V17Z" />

    </Icon>
  );
};
LanIcon.displayName = 'LanIcon';
  