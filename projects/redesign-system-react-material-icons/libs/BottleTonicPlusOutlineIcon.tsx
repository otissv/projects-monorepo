import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BottleTonicPlusOutlineIcon: FC<IconInterface> = function BottleTonicPlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BottleTonicPlusOutlineIcon ${className}`;
      return (
        <Icon alt="BottleTonicPlusOutline" className={classNames} {...propsRest}>
          <path d="M13 4H11L10 2H14L13 4M19 13V22H5V13C5 10.24 7.24 8 10 8V6H9V5H15V6H14V8C16.76 8 19 10.24 19 13M17 13C17 11.35 15.65 10 14 10H10C8.35 10 7 11.35 7 13V20H17V13M15 16H13V18H11V16H9V14H11V12H13V14H15V16Z" />

        </Icon>
      );
    };
    BottleTonicPlusOutlineIcon.displayName = 'BottleTonicPlusOutlineIcon';
      