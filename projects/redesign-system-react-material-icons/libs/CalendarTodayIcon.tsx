import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CalendarTodayIcon: FC<IconInterface> = function CalendarTodayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarTodayIcon ${className}`;
      return (
        <Icon alt="CalendarToday" className={classNames} {...propsRest}>
          <path d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />

        </Icon>
      );
    };
    CalendarTodayIcon.displayName = 'CalendarTodayIcon';
      