import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BriefcasePlusIcon: FC<IconInterface> = function BriefcasePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BriefcasePlusIcon ${className}`;
      return (
        <Icon alt="BriefcasePlus" className={classNames} {...propsRest}>
          <path d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V13.53C20.94,12.58 19.54,12 18,12A6,6 0 0,0 12,18C12,19.09 12.29,20.12 12.8,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />

        </Icon>
      );
    };
    BriefcasePlusIcon.displayName = 'BriefcasePlusIcon';
      