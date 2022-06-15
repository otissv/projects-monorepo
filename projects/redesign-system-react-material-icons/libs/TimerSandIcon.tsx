import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const TimerSandIcon: FC<IconInterface> = function TimerSandIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TimerSandIcon ${className}`;
      return (
        <Icon alt="TimerSand" className={classNames} {...propsRest}>
          <path d="M6,2H18V8H18V8L14,12L18,16V16H18V22H6V16H6V16L10,12L6,8V8H6V2M16,16.5L12,12.5L8,16.5V20H16V16.5M12,11.5L16,7.5V4H8V7.5L12,11.5M10,6H14V6.75L12,8.75L10,6.75V6Z" />

        </Icon>
      );
    };
    TimerSandIcon.displayName = 'TimerSandIcon';
      