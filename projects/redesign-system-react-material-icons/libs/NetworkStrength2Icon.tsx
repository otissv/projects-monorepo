import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const NetworkStrength2Icon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `NetworkStrength2Icon ${className}`;
  return (
    <Icon alt="NetworkStrength2" className={classNames} {...propsRest}>
      <path d="M1,21H21V1M19,5.83V19H13V11.83" />

    </Icon>
  );
};
NetworkStrength2Icon.displayName = 'NetworkStrength2Icon';
  