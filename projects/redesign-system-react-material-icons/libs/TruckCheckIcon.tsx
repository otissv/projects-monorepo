import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const TruckCheckIcon: FC<IconInterface> = function TruckCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TruckCheckIcon ${className}`;
      return (
        <Icon alt="TruckCheck" className={classNames} {...propsRest}>
          <path d="M3,4H17V8H20L23,12V17H21A3,3 0 0,1 18,20A3,3 0 0,1 15,17H9A3,3 0 0,1 6,20A3,3 0 0,1 3,17H1V6C1,4.89 1.9,4 3,4M17,9.5V12H21.47L19.5,9.5H17M6,15.5A1.5,1.5 0 0,0 4.5,17A1.5,1.5 0 0,0 6,18.5A1.5,1.5 0 0,0 7.5,17A1.5,1.5 0 0,0 6,15.5M18,15.5A1.5,1.5 0 0,0 16.5,17A1.5,1.5 0 0,0 18,18.5A1.5,1.5 0 0,0 19.5,17A1.5,1.5 0 0,0 18,15.5M8,14L14,8L12.59,6.58L8,11.17L5.91,9.08L4.5,10.5L8,14Z" />

        </Icon>
      );
    };
    TruckCheckIcon.displayName = 'TruckCheckIcon';
      