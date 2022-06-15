import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MessageMinusOutlineIcon: FC<IconInterface> = function MessageMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MessageMinusOutlineIcon ${className}`;
      return (
        <Icon alt="MessageMinusOutline" className={classNames} {...propsRest}>
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H6L4 18V4H20M8 9V11H16V9H8Z" />

        </Icon>
      );
    };
    MessageMinusOutlineIcon.displayName = 'MessageMinusOutlineIcon';
      