import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ReplyCircleIcon: FC<IconInterface> = function ReplyCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ReplyCircleIcon ${className}`;
      return (
        <Icon alt="ReplyCircle" className={classNames} {...propsRest}>
          <path d="M2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2 2 6.5 2 12M5 11L10 6V9C15.06 9.73 17.28 13.33 18 17C16.19 14.43 13.61 13 10 13V16L5 11Z" />

        </Icon>
      );
    };
    ReplyCircleIcon.displayName = 'ReplyCircleIcon';
      