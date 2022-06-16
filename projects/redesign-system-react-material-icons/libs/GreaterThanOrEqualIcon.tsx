import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const GreaterThanOrEqualIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `GreaterThanOrEqualIcon ${className}`;
  return (
    <Icon alt="GreaterThanOrEqual" className={classNames} {...propsRest}>
      <path d="M6.5,2.27L20,10.14L6.5,18L5.5,16.27L16.03,10.14L5.5,4L6.5,2.27M20,20V22H5V20H20Z" />

    </Icon>
  );
};
GreaterThanOrEqualIcon.displayName = 'GreaterThanOrEqualIcon';
  