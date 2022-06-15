import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MessageBulletedIcon: FC<IconInterface> = function MessageBulletedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageBulletedIcon ${className}`;
      return (
        <Icon alt="MessageBulleted" className={classNames} {...propsRest}>
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M8,14H6V12H8V14M8,11H6V9H8V11M8,8H6V6H8V8M15,14H10V12H15V14M18,11H10V9H18V11M18,8H10V6H18V8Z" />

        </Icon>
      );
    };
    MessageBulletedIcon.displayName = 'MessageBulletedIcon';
      