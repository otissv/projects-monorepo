import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MinusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MinusIcon ${className}`;
  return (
    <Icon alt="Minus" className={classNames} {...propsRest}>
      <path d="M19,13H5V11H19V13Z" />

    </Icon>
  );
};
MinusIcon.displayName = 'MinusIcon';
  