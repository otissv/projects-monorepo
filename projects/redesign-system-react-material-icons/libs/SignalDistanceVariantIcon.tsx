import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SignalDistanceVariantIcon: FC<IconInterface> = function SignalDistanceVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignalDistanceVariantIcon ${className}`;
      return (
        <Icon alt="SignalDistanceVariant" className={classNames} {...propsRest}>
          <path d="M4,6V4A12,12 0 0,1 16,16H14A10,10 0 0,0 4,6M4,10V8A8,8 0 0,1 12,16H10A6,6 0 0,0 4,10M4,12A4,4 0 0,1 8,16H4V12M3,18H19V16L22,19L19,22V20H3V18Z" />

        </Icon>
      );
    };
    SignalDistanceVariantIcon.displayName = 'SignalDistanceVariantIcon';
      