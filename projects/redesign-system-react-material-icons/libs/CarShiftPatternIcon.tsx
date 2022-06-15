import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CarShiftPatternIcon: FC<IconInterface> = function CarShiftPatternIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CarShiftPatternIcon ${className}`;
      return (
        <Icon alt="CarShiftPattern" className={classNames} {...propsRest}>
          <path d="M8 5H4V2H8V5M4 22H8V19H4V22M14 2H10V5H14V2M10 22H14V19H10V22M16 2V5H20V2H16M17 11H13V7H11V11H7V7H5V17H7V13H11V17H13V13H19V7H17V11Z" />

        </Icon>
      );
    };
    CarShiftPatternIcon.displayName = 'CarShiftPatternIcon';
      