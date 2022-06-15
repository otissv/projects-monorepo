import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CalendarIcon: FC<IconInterface> = function CalendarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CalendarIcon ${className}`;
      return (
        <Icon alt="Calendar" className={classNames} {...propsRest}>
          <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />

        </Icon>
      );
    };
    CalendarIcon.displayName = 'CalendarIcon';
      