import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PerspectiveMoreIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PerspectiveMoreIcon ${className}`;
  return (
    <Icon alt="PerspectiveMore" className={classNames} {...propsRest}>
      <path d="M16.56,12L19.23,20H4.78L7.44,12H16.56M17,1L13,5L17,9V6H21V4H17V1M7,1V4H3V6H7V9L11,5L7,1M18,10H6L2,22H22L18,10Z" />

    </Icon>
  );
};
PerspectiveMoreIcon.displayName = 'PerspectiveMoreIcon';
  