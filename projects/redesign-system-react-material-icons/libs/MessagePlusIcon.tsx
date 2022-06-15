import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MessagePlusIcon: FC<IconInterface> = function MessagePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessagePlusIcon ${className}`;
      return (
        <Icon alt="MessagePlus" className={classNames} {...propsRest}>
          <path d="M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z" />

        </Icon>
      );
    };
    MessagePlusIcon.displayName = 'MessagePlusIcon';
      