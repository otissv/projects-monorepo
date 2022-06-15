import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ChevronDownBoxIcon: FC<IconInterface> = function ChevronDownBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChevronDownBoxIcon ${className}`;
      return (
        <Icon alt="ChevronDownBox" className={classNames} {...propsRest}>
          <path d="M19,3H5A2,2 0 0,0 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5A2,2 0 0,0 19,3M12,15.71L6,9.71L7.41,8.29L12,12.88L16.59,8.29L18,9.71L12,15.71Z" />

        </Icon>
      );
    };
    ChevronDownBoxIcon.displayName = 'ChevronDownBoxIcon';
      