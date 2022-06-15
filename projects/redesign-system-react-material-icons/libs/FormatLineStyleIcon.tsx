import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FormatLineStyleIcon: FC<IconInterface> = function FormatLineStyleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatLineStyleIcon ${className}`;
      return (
        <Icon alt="FormatLineStyle" className={classNames} {...propsRest}>
          <path d="M3,16H8V14H3V16M9.5,16H14.5V14H9.5V16M16,16H21V14H16V16M3,20H5V18H3V20M7,20H9V18H7V20M11,20H13V18H11V20M15,20H17V18H15V20M19,20H21V18H19V20M3,12H11V10H3V12M13,12H21V10H13V12M3,4V8H21V4H3Z" />

        </Icon>
      );
    };
    FormatLineStyleIcon.displayName = 'FormatLineStyleIcon';
      