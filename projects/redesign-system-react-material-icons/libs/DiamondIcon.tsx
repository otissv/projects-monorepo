import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const DiamondIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `DiamondIcon ${className}`;
  return (
    <Icon alt="Diamond" className={classNames} {...propsRest}>
      <path d="M6,2L2,8L12,22L22,8L18,2H6Z" />

    </Icon>
  );
};
DiamondIcon.displayName = 'DiamondIcon';
  