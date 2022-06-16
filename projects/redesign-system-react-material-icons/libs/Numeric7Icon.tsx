import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const Numeric7Icon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `Numeric7Icon ${className}`;
  return (
    <Icon alt="Numeric7" className={classNames} {...propsRest}>
      <path d="M11,17L15,9V7H9V9H13L9,17" />

    </Icon>
  );
};
Numeric7Icon.displayName = 'Numeric7Icon';
  