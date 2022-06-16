import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const AlertOctagramIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `AlertOctagramIcon ${className}`;
  return (
    <Icon alt="AlertOctagram" className={classNames} {...propsRest}>
      <path d="M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M13,17V15H11V17H13M13,13V7H11V13H13Z" />

    </Icon>
  );
};
AlertOctagramIcon.displayName = 'AlertOctagramIcon';
  