import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CreditCardMultipleIcon: FC<IconInterface> = function CreditCardMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreditCardMultipleIcon ${className}`;
      return (
        <Icon alt="CreditCardMultiple" className={classNames} {...propsRest}>
          <path d="M21 9V6H7V9H21M21 3A2 2 0 0 1 23 5V15A2 2 0 0 1 21 17H7A2 2 0 0 1 5 15V5A2 2 0 0 1 7 3H21M3 19H18V21H3A2 2 0 0 1 1 19V8H3Z" />

        </Icon>
      );
    };
    CreditCardMultipleIcon.displayName = 'CreditCardMultipleIcon';
      