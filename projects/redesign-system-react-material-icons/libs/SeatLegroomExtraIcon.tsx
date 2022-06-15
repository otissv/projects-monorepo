import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SeatLegroomExtraIcon: FC<IconInterface> = function SeatLegroomExtraIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SeatLegroomExtraIcon ${className}`;
      return (
        <Icon alt="SeatLegroomExtra" className={classNames} {...propsRest}>
          <path d="M4,12V3H2V12A5,5 0 0,0 7,17H13V15H7A3,3 0 0,1 4,12M22.83,17.24C22.45,16.5 21.54,16.27 20.8,16.61L19.71,17.11L16.3,10.13C15.96,9.45 15.27,9 14.5,9H11V3H5V11A3,3 0 0,0 8,14H15L18.41,21L22.13,19.3C22.9,18.94 23.23,18 22.83,17.24Z" />

        </Icon>
      );
    };
    SeatLegroomExtraIcon.displayName = 'SeatLegroomExtraIcon';
      