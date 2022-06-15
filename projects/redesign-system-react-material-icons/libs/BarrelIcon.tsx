import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BarrelIcon: FC<IconInterface> = function BarrelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BarrelIcon ${className}`;
      return (
        <Icon alt="Barrel" className={classNames} {...propsRest}>
          <path d="M18,19H19V21H5V19H6V13H5V11H6V5H5V3H19V5H18V11H19V13H18V19M9,13A3,3 0 0,0 12,16A3,3 0 0,0 15,13C15,11 12,7.63 12,7.63C12,7.63 9,11 9,13Z" />

        </Icon>
      );
    };
    BarrelIcon.displayName = 'BarrelIcon';
      