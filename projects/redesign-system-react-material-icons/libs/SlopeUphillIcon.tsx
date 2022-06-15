import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SlopeUphillIcon: FC<IconInterface> = function SlopeUphillIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SlopeUphillIcon ${className}`;
      return (
        <Icon alt="SlopeUphill" className={classNames} {...propsRest}>
          <path d="M22,13V22H2V19L22,13M21.68,7.06L16.86,4.46L17.7,7.24L7.58,10.24C6.63,8.95 4.82,8.67 3.53,9.62C2.24,10.57 1.96,12.38 2.91,13.67C3.85,14.97 5.67,15.24 6.96,14.29C7.67,13.78 8.1,12.97 8.14,12.09L18.26,9.09L19.1,11.87L21.68,7.06Z" />

        </Icon>
      );
    };
    SlopeUphillIcon.displayName = 'SlopeUphillIcon';
      