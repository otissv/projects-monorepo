import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FileImportOutlineIcon: FC<IconInterface> = function FileImportOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileImportOutlineIcon ${className}`;
      return (
        <Icon alt="FileImportOutline" className={classNames} {...propsRest}>
          <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M15 11.93V19H7.93L10.05 16.88L7.22 14.05L10.05 11.22L12.88 14.05L15 11.93Z" />

        </Icon>
      );
    };
    FileImportOutlineIcon.displayName = 'FileImportOutlineIcon';
      