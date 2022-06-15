import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ShieldCrossIcon: FC<IconInterface> = function ShieldCrossIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShieldCrossIcon ${className}`;
      return (
        <Icon alt="ShieldCross" className={classNames} {...propsRest}>
          <path d="M12,1L3,5V11C3,16.5 6.8,21.7 12,23C17.2,21.7 21,16.5 21,11V5L12,1M16,10H13V18H11V10H8V8H11V5H13V8H16V10Z" />

        </Icon>
      );
    };
    ShieldCrossIcon.displayName = 'ShieldCrossIcon';
      