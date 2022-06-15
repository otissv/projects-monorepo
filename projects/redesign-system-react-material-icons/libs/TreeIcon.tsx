import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const TreeIcon: FC<IconInterface> = function TreeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TreeIcon ${className}`;
      return (
        <Icon alt="Tree" className={classNames} {...propsRest}>
          <path d="M11,21V16.74C10.53,16.91 10.03,17 9.5,17C7,17 5,15 5,12.5C5,11.23 5.5,10.09 6.36,9.27C6.13,8.73 6,8.13 6,7.5C6,5 8,3 10.5,3C12.06,3 13.44,3.8 14.25,5C14.33,5 14.41,5 14.5,5A5.5,5.5 0 0,1 20,10.5A5.5,5.5 0 0,1 14.5,16C14,16 13.5,15.93 13,15.79V21H11Z" />

        </Icon>
      );
    };
    TreeIcon.displayName = 'TreeIcon';
      