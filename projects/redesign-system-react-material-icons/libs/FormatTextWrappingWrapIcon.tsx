import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FormatTextWrappingWrapIcon: FC<IconInterface> = function FormatTextWrappingWrapIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextWrappingWrapIcon ${className}`;
      return (
        <Icon alt="FormatTextWrappingWrap" className={classNames} {...propsRest}>
          <path d="M7,21H5V3H7V21M19,3H17V21H19V3M13,8H9V10H12.97C13.14,10 14,10.16 14,12C14,13.84 13.14,14 13,14H11V12L8,15L11,18V16H13C14.04,16 16,15.16 16,12C16,8.84 14.04,8 13,8Z" />

        </Icon>
      );
    };
    FormatTextWrappingWrapIcon.displayName = 'FormatTextWrappingWrapIcon';
      