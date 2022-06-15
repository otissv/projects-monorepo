import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MonitorStarIcon: FC<IconInterface> = function MonitorStarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MonitorStarIcon ${className}`;
      return (
        <Icon alt="MonitorStar" className={classNames} {...propsRest}>
          <path d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M12.97,9H16L13.53,10.76L14.47,13.67L12,11.87L9.53,13.67L10.47,10.76L8,9H11.03L12,6L12.97,9Z" />

        </Icon>
      );
    };
    MonitorStarIcon.displayName = 'MonitorStarIcon';
      