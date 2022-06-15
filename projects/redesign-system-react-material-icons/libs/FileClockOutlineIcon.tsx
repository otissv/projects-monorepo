import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FileClockOutlineIcon: FC<IconInterface> = function FileClockOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileClockOutlineIcon ${className}`;
      return (
        <Icon alt="FileClockOutline" className={classNames} {...propsRest}>
          <path d="M4 2A2 2 0 0 0 2 4V20A2 2 0 0 0 4 22H12.41A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 18 9.3V8L12 2H4M4 4H11V9H16A7 7 0 0 0 9 16A7 7 0 0 0 10.26 20H4V4M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12V17L18.61 19.16L19.36 17.94L16.5 16.25V12H15Z" />

        </Icon>
      );
    };
    FileClockOutlineIcon.displayName = 'FileClockOutlineIcon';
      