import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ViewDashboardOutlineIcon: FC<IconInterface> = function ViewDashboardOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ViewDashboardOutlineIcon ${className}`;
      return (
        <Icon alt="ViewDashboardOutline" className={classNames} {...propsRest}>
          <path d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z" />

        </Icon>
      );
    };
    ViewDashboardOutlineIcon.displayName = 'ViewDashboardOutlineIcon';
      