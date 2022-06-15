import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AirplaneTakeoffIcon: FC<IconInterface> = function AirplaneTakeoffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AirplaneTakeoffIcon ${className}`;
      return (
        <Icon alt="AirplaneTakeoff" className={classNames} {...propsRest}>
          <path d="M2.5,19H21.5V21H2.5V19M22.07,9.64C21.86,8.84 21.03,8.36 20.23,8.58L14.92,10L8,3.57L6.09,4.08L10.23,11.25L5.26,12.58L3.29,11.04L1.84,11.43L3.66,14.59L4.43,15.92L6.03,15.5L11.34,14.07L15.69,12.91L21,11.5C21.81,11.26 22.28,10.44 22.07,9.64Z" />

        </Icon>
      );
    };
    AirplaneTakeoffIcon.displayName = 'AirplaneTakeoffIcon';
      