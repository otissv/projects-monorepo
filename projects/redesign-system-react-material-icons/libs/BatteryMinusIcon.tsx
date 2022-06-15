import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BatteryMinusIcon: FC<IconInterface> = function BatteryMinusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BatteryMinusIcon ${className}`;
      return (
        <Icon alt="BatteryMinus" className={classNames} {...propsRest}>
          <path d="M16.67,4C17.4,4 18,4.6 18,5.33V20.67A1.33,1.33 0 0,1 16.67,22H7.33C6.6,22 6,21.4 6,20.67V5.33A1.33,1.33 0 0,1 7.33,4H9V2H15V4H16.67M8,12V14H16V12" />

        </Icon>
      );
    };
    BatteryMinusIcon.displayName = 'BatteryMinusIcon';
      