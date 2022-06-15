import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FileExcelIcon: FC<IconInterface> = function FileExcelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileExcelIcon ${className}`;
      return (
        <Icon alt="FileExcel" className={classNames} {...propsRest}>
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.8,20H14L12,16.6L10,20H8.2L11.1,15.5L8.2,11H10L12,14.4L14,11H15.8L12.9,15.5L15.8,20M13,9V3.5L18.5,9H13Z" />

        </Icon>
      );
    };
    FileExcelIcon.displayName = 'FileExcelIcon';
      