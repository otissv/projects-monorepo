import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CollapseAllOutlineIcon: FC<IconInterface> = function CollapseAllOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CollapseAllOutlineIcon ${className}`;
      return (
        <Icon alt="CollapseAllOutline" className={classNames} {...propsRest}>
          <path d="M4,2A2,2 0 0,0 2,4V14H4V4H14V2H4M8,6A2,2 0 0,0 6,8V18H8V8H18V6H8M20,12V20H12V12H20M20,10H12A2,2 0 0,0 10,12V20A2,2 0 0,0 12,22H20A2,2 0 0,0 22,20V12A2,2 0 0,0 20,10M19,17H13V15H19V17Z" />

        </Icon>
      );
    };
    CollapseAllOutlineIcon.displayName = 'CollapseAllOutlineIcon';
      