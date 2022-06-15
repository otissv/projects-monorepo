import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ClockCheckIcon: FC<IconInterface> = function ClockCheckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockCheckIcon ${className}`;
      return (
        <Icon alt="ClockCheck" className={classNames} {...propsRest}>
          <path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13 19C13 17.5 13.5 16.2 14.4 15.1L11 13V7H12.5V12.2L15.6 14.1C16.6 13.4 17.7 13 19 13C20 13 21 13.3 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.3 21 13 20 13 19Z" />

        </Icon>
      );
    };
    ClockCheckIcon.displayName = 'ClockCheckIcon';
      