import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BatteryPositiveIcon: FC<IconInterface> = function BatteryPositiveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BatteryPositiveIcon ${className}`;
      return (
        <Icon alt="BatteryPositive" className={classNames} {...propsRest}>
          <path d="M11.67,4A1.33,1.33 0 0,1 13,5.33V20.67C13,21.4 12.4,22 11.67,22H2.33C1.6,22 1,21.4 1,20.67V5.33A1.33,1.33 0 0,1 2.33,4H4V2H10V4H11.67M23,14H20V17H18V14H15V12H18V9H20V12H23V14M3,13H11V6H3V13Z" />

        </Icon>
      );
    };
    BatteryPositiveIcon.displayName = 'BatteryPositiveIcon';
      