import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CreditCardScanOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CreditCardScanOutlineIcon ${className}`;
  return (
    <Icon alt="CreditCardScanOutline" className={classNames} {...propsRest}>
      <path d="M2,4H6V2H2A2,2 0 0,0 0,4V8H2V4M22,2H18V4H22V8H24V4A2,2 0 0,0 22,2M2,16H0V20A2,2 0 0,0 2,22H6V20H2V16M22,20H18V22H22A2,2 0 0,0 24,20V16H22V20M4,8V16A2,2 0 0,0 6,18H18A2,2 0 0,0 20,16V8A2,2 0 0,0 18,6H6A2,2 0 0,0 4,8M6,16V12H18V16H6M18,8V10H6V8H18Z" />

    </Icon>
  );
};
CreditCardScanOutlineIcon.displayName = 'CreditCardScanOutlineIcon';
  