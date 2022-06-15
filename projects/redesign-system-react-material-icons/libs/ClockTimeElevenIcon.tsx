import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ClockTimeElevenIcon: FC<IconInterface> = function ClockTimeElevenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClockTimeElevenIcon ${className}`;
      return (
        <Icon alt="ClockTimeEleven" className={classNames} {...propsRest}>
          <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 13H11L8.5 8.6L9.8 7.8L11 10V7H12.5V13Z" />

        </Icon>
      );
    };
    ClockTimeElevenIcon.displayName = 'ClockTimeElevenIcon';
      