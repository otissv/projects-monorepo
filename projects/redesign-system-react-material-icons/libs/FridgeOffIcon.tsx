import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FridgeOffIcon: FC<IconInterface> = function FridgeOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FridgeOffIcon ${className}`;
      return (
        <Icon alt="FridgeOff" className={classNames} {...propsRest}>
          <path d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V9H7.11L8.11 10H5V19C5 20.11 5.9 21 7 21V22H9V21H15V22H17V21C17.58 21 18.1 20.75 18.46 20.35L20.84 22.73L22.11 21.46M10 15H8V12H10V15M19 15.8L13.2 10H19V15.8M8.2 5L5.7 2.5C6.05 2.19 6.5 2 7 2H17C18.11 2 19 2.9 19 4V9H12.2L10 6.8V5H8.2Z" />

        </Icon>
      );
    };
    FridgeOffIcon.displayName = 'FridgeOffIcon';
      