import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const NetworkStrengthOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `NetworkStrengthOutlineIcon ${className}`;
  return (
    <Icon alt="NetworkStrengthOutline" className={classNames} {...propsRest}>
      <path d="M1,21H21V1M19,5.83V19H6" />

    </Icon>
  );
};
NetworkStrengthOutlineIcon.displayName = 'NetworkStrengthOutlineIcon';
  