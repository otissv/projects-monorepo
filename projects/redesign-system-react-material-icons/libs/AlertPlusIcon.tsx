import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AlertPlusIcon: FC<IconInterface> = function AlertPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlertPlusIcon ${className}`;
      return (
        <Icon alt="AlertPlus" className={classNames} {...propsRest}>
          <path d="M14 19C14 16.21 15.91 13.87 18.5 13.2L12 2L1 21H14.35C14.13 20.37 14 19.7 14 19M13 18H11V16H13V18M13 14H11V10H13V14M21 15V18H24V20H21V23H19V20H16V18H19V15H21Z" />

        </Icon>
      );
    };
    AlertPlusIcon.displayName = 'AlertPlusIcon';
      