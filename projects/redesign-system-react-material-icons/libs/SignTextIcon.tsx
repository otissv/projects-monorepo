import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SignTextIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SignTextIcon ${className}`;
  return (
    <Icon alt="SignText" className={classNames} {...propsRest}>
      <path d="M11,3L12,2L13,3V5H20A1,1 0 0,1 21,6V16A1,1 0 0,1 20,17H13V20A2,2 0 0,1 15,22H9A2,2 0 0,1 11,20V17H4A1,1 0 0,1 3,16V6A1,1 0 0,1 4,5H11V3M6,8V10H18V8H6M6,12V14H13V12H6Z" />

    </Icon>
  );
};
SignTextIcon.displayName = 'SignTextIcon';
  