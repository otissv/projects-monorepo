import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FormatTextboxIcon: FC<IconInterface> = function FormatTextboxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatTextboxIcon ${className}`;
      return (
        <Icon alt="FormatTextbox" className={classNames} {...propsRest}>
          <path d="M21,7V3H17V4H7V3H3V7H4V17H3V21H7V20H17V21H21V17H20V7H21M18,4H20V6H18V4M4,4H6V6H4V4M6,20H4V18H6V20M20,20H18V18H20V20M18,17H17V18H7V17H6V7H7V6H17V7H18V17M16,8V10H13V16H11V10H8V8H16Z" />

        </Icon>
      );
    };
    FormatTextboxIcon.displayName = 'FormatTextboxIcon';
      