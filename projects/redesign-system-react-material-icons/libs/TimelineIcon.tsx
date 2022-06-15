import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const TimelineIcon: FC<IconInterface> = function TimelineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TimelineIcon ${className}`;
      return (
        <Icon alt="Timeline" className={classNames} {...propsRest}>
          <path d="M4 2V8H2V2H4M2 22V16H4V22H2M5 12C5 13.11 4.11 14 3 14C1.9 14 1 13.11 1 12C1 10.9 1.9 10 3 10C4.11 10 5 10.9 5 12M24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6Z" />

        </Icon>
      );
    };
    TimelineIcon.displayName = 'TimelineIcon';
      