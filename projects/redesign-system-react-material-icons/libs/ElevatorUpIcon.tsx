import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ElevatorUpIcon: FC<IconInterface> = function ElevatorUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ElevatorUpIcon ${className}`;
      return (
        <Icon alt="ElevatorUp" className={classNames} {...propsRest}>
          <path d="M7 2L11 6H8V10H6V6H3L7 2M17 2L13 6H16V10H18V6H21L17 2M7 12H17C18.11 12 19 12.9 19 14V20C19 21.11 18.11 22 17 22H7C5.9 22 5 21.11 5 20V14C5 12.9 5.9 12 7 12M7 14V20H17V14H7Z" />

        </Icon>
      );
    };
    ElevatorUpIcon.displayName = 'ElevatorUpIcon';
      