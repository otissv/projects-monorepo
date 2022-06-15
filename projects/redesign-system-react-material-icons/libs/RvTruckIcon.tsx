import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const RvTruckIcon: FC<IconInterface> = function RvTruckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RvTruckIcon ${className}`;
      return (
        <Icon alt="RvTruck" className={classNames} {...propsRest}>
          <path d="M20 8H22V6L20 4H3A2 2 0 0 0 1 6V15A2 2 0 0 0 3 17H4A3 3 0 0 0 7 20A3 3 0 0 0 10 17H15A3 3 0 0 0 21 17H23V12M7 18.5A1.5 1.5 0 0 1 7 15.5A1.5 1.5 0 0 1 7 18.5M9 12H3V9H9M14 15H11V9H14M18 18.5A1.5 1.5 0 1 1 19.5 17A1.54 1.54 0 0 1 18 18.5M17 12V9.5H19.5L21.5 12Z" />

        </Icon>
      );
    };
    RvTruckIcon.displayName = 'RvTruckIcon';
      