import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const GamepadSquareIcon: FC<IconInterface> = function GamepadSquareIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GamepadSquareIcon ${className}`;
      return (
        <Icon alt="GamepadSquare" className={classNames} {...propsRest}>
          <path d="M21,6H3A2,2 0 0,0 1,8V16A2,2 0 0,0 3,18H21A2,2 0 0,0 23,16V8A2,2 0 0,0 21,6M11,13H8V16H6V13H3V11H6V8H8V11H11M15.5,15A1.5,1.5 0 0,1 14,13.5A1.5,1.5 0 0,1 15.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,15M19.5,12A1.5,1.5 0 0,1 18,10.5A1.5,1.5 0 0,1 19.5,9A1.5,1.5 0 0,1 21,10.5A1.5,1.5 0 0,1 19.5,12Z" />

        </Icon>
      );
    };
    GamepadSquareIcon.displayName = 'GamepadSquareIcon';
      