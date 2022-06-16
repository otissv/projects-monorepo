import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SquareIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SquareIcon ${className}`;
  return (
    <Icon alt="Square" className={classNames} {...propsRest}>
      <path d="M3,3V21H21V3" />

    </Icon>
  );
};
SquareIcon.displayName = 'SquareIcon';
  