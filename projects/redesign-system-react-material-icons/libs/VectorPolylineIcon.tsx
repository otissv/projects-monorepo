import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const VectorPolylineIcon: FC<IconInterface> = function VectorPolylineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VectorPolylineIcon ${className}`;
      return (
        <Icon alt="VectorPolyline" className={classNames} {...propsRest}>
          <path d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3M4 5H6V7H4M18 7H20V9H18M8 17H10V19H8Z" />

        </Icon>
      );
    };
    VectorPolylineIcon.displayName = 'VectorPolylineIcon';
      