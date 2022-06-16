import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CupIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CupIcon ${className}`;
  return (
    <Icon alt="Cup" className={classNames} {...propsRest}>
      <path d="M18.32,8H5.67L5.23,4H18.77M3,2L5,20.23C5.13,21.23 5.97,22 7,22H17C18,22 18.87,21.23 19,20.23L21,2H3Z" />

    </Icon>
  );
};
CupIcon.displayName = 'CupIcon';
  