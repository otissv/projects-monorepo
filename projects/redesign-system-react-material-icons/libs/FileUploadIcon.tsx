import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FileUploadIcon: FC<IconInterface> = function FileUploadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileUploadIcon ${className}`;
      return (
        <Icon alt="FileUpload" className={classNames} {...propsRest}>
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z" />

        </Icon>
      );
    };
    FileUploadIcon.displayName = 'FileUploadIcon';
      