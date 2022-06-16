import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlphaDBoxOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlphaDBoxOutlineIcon ${className}`;
  return (
    <Icon alt="AlphaDBoxOutline" className={classNames} {...propsRest}>
      <path d="M9,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17H9V7M11,9V15H13V9H11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z" />

    </Icon>
  );
};
AlphaDBoxOutlineIcon.displayName = 'AlphaDBoxOutlineIcon';
  