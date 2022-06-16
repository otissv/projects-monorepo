import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SquareMediumIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SquareMediumIcon ${className}`;
  return (
    <Icon alt="SquareMedium" className={classNames} {...propsRest}>
      <path d="M16,8H8V16H16V8Z" />

    </Icon>
  );
};
SquareMediumIcon.displayName = 'SquareMediumIcon';
  