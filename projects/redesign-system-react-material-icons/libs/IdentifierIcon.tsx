import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const IdentifierIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `IdentifierIcon ${className}`;
  return (
    <Icon alt="Identifier" className={classNames} {...propsRest}>
      <path d="M6,18V8H8V18H6M6,4.5H8V6.5H6V4.5M17,4H19V18H17V17.75C17,17.75 15.67,18 15,18A5,5 0 0,1 10,13A5,5 0 0,1 15,8C15.67,8 17,8.25 17,8.25V4M17,10.25C17,10.25 15.67,10 15,10A3,3 0 0,0 12,13A3,3 0 0,0 15,16C15.67,16 17,15.75 17,15.75V10.25Z" />

    </Icon>
  );
};
IdentifierIcon.displayName = 'IdentifierIcon';
  