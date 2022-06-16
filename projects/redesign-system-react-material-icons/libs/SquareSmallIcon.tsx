import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SquareSmallIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SquareSmallIcon ${className}`;
  return (
    <Icon alt="SquareSmall" className={classNames} {...propsRest}>
      <path d="M10,14V10H14V14H10Z" />

    </Icon>
  );
};
SquareSmallIcon.displayName = 'SquareSmallIcon';
  