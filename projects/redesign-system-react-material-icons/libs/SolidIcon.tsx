import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SolidIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SolidIcon ${className}`;
  return (
    <Icon alt="Solid" className={classNames} {...propsRest}>
      <path d="M0,0H24V24H0" />

    </Icon>
  );
};
SolidIcon.displayName = 'SolidIcon';
  