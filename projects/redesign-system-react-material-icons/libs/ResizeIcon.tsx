import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ResizeIcon: FC<IconInterface> = function ResizeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ResizeIcon ${className}`;
      return (
        <Icon alt="Resize" className={classNames} {...propsRest}>
          <path d="M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z" />

        </Icon>
      );
    };
    ResizeIcon.displayName = 'ResizeIcon';
      