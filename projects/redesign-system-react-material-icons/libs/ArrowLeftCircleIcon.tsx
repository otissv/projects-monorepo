import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ArrowLeftCircleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ArrowLeftCircleIcon ${className}`;
  return (
    <Icon alt="ArrowLeftCircle" className={classNames} {...propsRest}>
      <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" />

    </Icon>
  );
};
ArrowLeftCircleIcon.displayName = 'ArrowLeftCircleIcon';
  