import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FileChartIcon: FC<IconInterface> = function FileChartIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FileChartIcon ${className}`;
      return (
        <Icon alt="FileChart" className={classNames} {...propsRest}>
          <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z" />

        </Icon>
      );
    };
    FileChartIcon.displayName = 'FileChartIcon';
      