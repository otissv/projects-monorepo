import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlertBoxIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlertBoxIcon ${className}`;
  return (
    <Icon alt="AlertBox" className={classNames} {...propsRest}>
      <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M13,13V7H11V13H13M13,17V15H11V17H13Z" />

    </Icon>
  );
};
AlertBoxIcon.displayName = 'AlertBoxIcon';
  