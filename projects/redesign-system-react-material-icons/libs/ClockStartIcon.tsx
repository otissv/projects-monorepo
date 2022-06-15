import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ClockStartIcon: FC<IconInterface> = function ClockStartIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockStartIcon ${className}`;
      return (
        <Icon alt="ClockStart" className={classNames} {...propsRest}>
          <path d="M12,1C8.14,1 5,4.14 5,8A7,7 0 0,0 12,15C15.86,15 19,11.87 19,8C19,4.14 15.86,1 12,1M12,3.15C14.67,3.15 16.85,5.32 16.85,8C16.85,10.68 14.67,12.85 12,12.85A4.85,4.85 0 0,1 7.15,8A4.85,4.85 0 0,1 12,3.15M11,5V8.69L14.19,10.53L14.94,9.23L12.5,7.82V5M4,16V24H6V21H18V24L22,20L18,16V19H6V16" />

        </Icon>
      );
    };
    ClockStartIcon.displayName = 'ClockStartIcon';
      