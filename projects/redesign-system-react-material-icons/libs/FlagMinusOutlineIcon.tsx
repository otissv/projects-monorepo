import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FlagMinusOutlineIcon: FC<IconInterface> = function FlagMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlagMinusOutlineIcon ${className}`;
      return (
        <Icon alt="FlagMinusOutline" className={classNames} {...propsRest}>
          <path d="M12.36 6L12.76 8H18V14H14.64L14.24 12H7V6H12.36M14 4H5V21H7V14H12.6L13 16H20V6H14.4M23 18H15V20H23V18Z" />

        </Icon>
      );
    };
    FlagMinusOutlineIcon.displayName = 'FlagMinusOutlineIcon';
      