import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const PinOffOutlineIcon: FC<IconInterface> = function PinOffOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PinOffOutlineIcon ${className}`;
      return (
        <Icon alt="PinOffOutline" className={classNames} {...propsRest}>
          <path d="M8,6.2V4H7V2H17V4H16V12L18,14V16H17.8L14,12.2V4H10V8.2L8,6.2M20,20.7L18.7,22L12.8,16.1V22H11.2V16H6V14L8,12V11.3L2,5.3L3.3,4L20,20.7M8.8,14H10.6L9.7,13.1L8.8,14Z" />

        </Icon>
      );
    };
    PinOffOutlineIcon.displayName = 'PinOffOutlineIcon';
      