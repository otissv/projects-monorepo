import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ParkingIcon: FC<IconInterface> = function ParkingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ParkingIcon ${className}`;
      return (
        <Icon alt="Parking" className={classNames} {...propsRest}>
          <path d="M13.2,11H10V7H13.2A2,2 0 0,1 15.2,9A2,2 0 0,1 13.2,11M13,3H6V21H10V15H13A6,6 0 0,0 19,9C19,5.68 16.31,3 13,3Z" />

        </Icon>
      );
    };
    ParkingIcon.displayName = 'ParkingIcon';
      