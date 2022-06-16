import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CircleMediumIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CircleMediumIcon ${className}`;
  return (
    <Icon alt="CircleMedium" className={classNames} {...propsRest}>
      <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />

    </Icon>
  );
};
CircleMediumIcon.displayName = 'CircleMediumIcon';
  