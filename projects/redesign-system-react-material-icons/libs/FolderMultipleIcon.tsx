import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FolderMultipleIcon: FC<IconInterface> = function FolderMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderMultipleIcon ${className}`;
      return (
        <Icon alt="FolderMultiple" className={classNames} {...propsRest}>
          <path d="M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z" />

        </Icon>
      );
    };
    FolderMultipleIcon.displayName = 'FolderMultipleIcon';
      