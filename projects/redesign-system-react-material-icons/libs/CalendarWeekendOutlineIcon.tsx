import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CalendarWeekendOutlineIcon: FC<IconInterface> = function CalendarWeekendOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarWeekendOutlineIcon ${className}`;
      return (
        <Icon alt="CalendarWeekendOutline" className={classNames} {...propsRest}>
          <path d="M19,4A2,2 0 0,1 21,6V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2H18V4H19M19,20V10H5V20H19M19,8V6H5V8H19M7,12H9V18H7V12M15,12H17V18H15V12Z" />

        </Icon>
      );
    };
    CalendarWeekendOutlineIcon.displayName = 'CalendarWeekendOutlineIcon';
      