import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EqualIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EqualIcon ${className}`;
  return (
    <Icon alt="Equal" className={classNames} {...propsRest}>
      <path d="M19,10H5V8H19V10M19,16H5V14H19V16Z" />

    </Icon>
  );
};
EqualIcon.displayName = 'EqualIcon';
  