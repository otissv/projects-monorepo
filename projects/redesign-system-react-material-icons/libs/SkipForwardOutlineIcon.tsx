import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SkipForwardOutlineIcon: FC<IconInterface> = function SkipForwardOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipForwardOutlineIcon ${className}`;
      return (
        <Icon alt="SkipForwardOutline" className={classNames} {...propsRest}>
          <path d="M6,9.83L8.17,12L6,14.17V9.83M4,5V19L11,12M20,5H18V19H20M13,9.83L15.17,12L13,14.17V9.83M11,5V19L18,12" />

        </Icon>
      );
    };
    SkipForwardOutlineIcon.displayName = 'SkipForwardOutlineIcon';
      