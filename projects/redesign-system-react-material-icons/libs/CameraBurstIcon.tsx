import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CameraBurstIcon: FC<IconInterface> = function CameraBurstIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CameraBurstIcon ${className}`;
      return (
        <Icon alt="CameraBurst" className={classNames} {...propsRest}>
          <path d="M1,5H3V19H1V5M5,5H7V19H5V5M22,5H10A1,1 0 0,0 9,6V18A1,1 0 0,0 10,19H22A1,1 0 0,0 23,18V6A1,1 0 0,0 22,5M11,17L13.5,13.85L15.29,16L17.79,12.78L21,17H11Z" />

        </Icon>
      );
    };
    CameraBurstIcon.displayName = 'CameraBurstIcon';
      