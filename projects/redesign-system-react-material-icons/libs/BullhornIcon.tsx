import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BullhornIcon: FC<IconInterface> = function BullhornIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BullhornIcon ${className}`;
      return (
        <Icon alt="Bullhorn" className={classNames} {...propsRest}>
          <path d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z" />

        </Icon>
      );
    };
    BullhornIcon.displayName = 'BullhornIcon';
      