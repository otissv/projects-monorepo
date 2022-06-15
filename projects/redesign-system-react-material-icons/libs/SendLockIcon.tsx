import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SendLockIcon: FC<IconInterface> = function SendLockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SendLockIcon ${className}`;
      return (
        <Icon alt="SendLock" className={classNames} {...propsRest}>
          <path d="M23,18V17.5A2.5,2.5 0 0,0 20.5,15A2.5,2.5 0 0,0 18,17.5V18A1,1 0 0,0 17,19V23A1,1 0 0,0 18,24H23A1,1 0 0,0 24,23V19A1,1 0 0,0 23,18M22,18H19V17.5A1.5,1.5 0 0,1 20.5,16A1.5,1.5 0 0,1 22,17.5V18M23,12L2,21V14L17,12L2,10V3L23,12Z" />

        </Icon>
      );
    };
    SendLockIcon.displayName = 'SendLockIcon';
      