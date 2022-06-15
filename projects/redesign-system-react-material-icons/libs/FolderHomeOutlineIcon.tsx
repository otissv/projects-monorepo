import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FolderHomeOutlineIcon: FC<IconInterface> = function FolderHomeOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FolderHomeOutlineIcon ${className}`;
      return (
        <Icon alt="FolderHomeOutline" className={classNames} {...propsRest}>
          <path d="M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M20 18H4V8H20M13 17V14H15V17H17V13H19L14 9L9 13H11V17Z" />

        </Icon>
      );
    };
    FolderHomeOutlineIcon.displayName = 'FolderHomeOutlineIcon';
      