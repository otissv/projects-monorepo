import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const GroupIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `GroupIcon ${className}`;
  return (
    <Icon alt="Group" className={classNames} {...propsRest}>
      <path d="M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14" />

    </Icon>
  );
};
GroupIcon.displayName = 'GroupIcon';
  