import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AutoUploadIcon: FC<IconInterface> = function AutoUploadIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AutoUploadIcon ${className}`;
      return (
        <Icon alt="AutoUpload" className={classNames} {...propsRest}>
          <path d="M5.35,12.65L6.5,9L7.65,12.65M5.5,7L2.3,16H4.2L4.9,14H8.1L8.8,16H10.7L7.5,7M11,20H22V18H11M14,16H19V11H22L16.5,5.5L11,11H14V16Z" />

        </Icon>
      );
    };
    AutoUploadIcon.displayName = 'AutoUploadIcon';
      