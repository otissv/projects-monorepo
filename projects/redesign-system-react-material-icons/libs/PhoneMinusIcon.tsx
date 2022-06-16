import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PhoneMinusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PhoneMinusIcon ${className}`;
  return (
    <Icon alt="PhoneMinus" className={classNames} {...propsRest}>
      <path d="M4,3A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.76,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.07,13.62 6.62,10.79L8.82,8.58C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.24 8.5,4A1,1 0 0,0 7.5,3M13,6V8H21V6" />

    </Icon>
  );
};
PhoneMinusIcon.displayName = 'PhoneMinusIcon';
  