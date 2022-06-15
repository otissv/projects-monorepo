import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const TooltipTextOutlineIcon: FC<IconInterface> = function TooltipTextOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TooltipTextOutlineIcon ${className}`;
      return (
        <Icon alt="TooltipTextOutline" className={classNames} {...propsRest}>
          <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z" />

        </Icon>
      );
    };
    TooltipTextOutlineIcon.displayName = 'TooltipTextOutlineIcon';
      