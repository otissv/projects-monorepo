import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlphaMIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlphaMIcon ${className}`;
  return (
    <Icon alt="AlphaM" className={classNames} {...propsRest}>
      <path d="M9,7A2,2 0 0,0 7,9V17H9V9H11V16H13V9H15V17H17V9A2,2 0 0,0 15,7H9Z" />

    </Icon>
  );
};
AlphaMIcon.displayName = 'AlphaMIcon';
  