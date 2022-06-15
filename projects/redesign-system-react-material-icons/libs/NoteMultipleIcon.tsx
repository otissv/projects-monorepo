import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const NoteMultipleIcon: FC<IconInterface> = function NoteMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NoteMultipleIcon ${className}`;
      return (
        <Icon alt="NoteMultiple" className={classNames} {...propsRest}>
          <path d="M16,9H21.5L16,3.5V9M7,2H17L23,8V18A2,2 0 0,1 21,20H7C5.89,20 5,19.1 5,18V4A2,2 0 0,1 7,2M3,6V22H21V24H3A2,2 0 0,1 1,22V6H3Z" />

        </Icon>
      );
    };
    NoteMultipleIcon.displayName = 'NoteMultipleIcon';
      