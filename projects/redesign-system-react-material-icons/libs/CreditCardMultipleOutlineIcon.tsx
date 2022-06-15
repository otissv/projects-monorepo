import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CreditCardMultipleOutlineIcon: FC<IconInterface> = function CreditCardMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreditCardMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="CreditCardMultipleOutline" className={classNames} {...propsRest}>
          <path d="M21,8V6H7V8H21M21,16V11H7V16H21M21,4A2,2 0 0,1 23,6V16A2,2 0 0,1 21,18H7C5.89,18 5,17.1 5,16V6C5,4.89 5.89,4 7,4H21M3,20H18V22H3A2,2 0 0,1 1,20V9H3V20Z" />

        </Icon>
      );
    };
    CreditCardMultipleOutlineIcon.displayName = 'CreditCardMultipleOutlineIcon';
      