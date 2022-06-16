import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const NetworkStrength4Icon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `NetworkStrength4Icon ${className}`;
  return (
    <Icon alt="NetworkStrength4" className={classNames} {...propsRest}>
      <path d="M1,21H21V1" />

    </Icon>
  );
};
NetworkStrength4Icon.displayName = 'NetworkStrength4Icon';
  