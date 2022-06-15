import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FlagPlusIcon: FC<IconInterface> = function FlagPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlagPlusIcon ${className}`;
      return (
        <Icon alt="FlagPlus" className={classNames} {...propsRest}>
          <path d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M12.4,5H18V12C15.78,12 13.84,13.21 12.8,15H11L10.6,13H5V20H3V3H12L12.4,5Z" />

        </Icon>
      );
    };
    FlagPlusIcon.displayName = 'FlagPlusIcon';
      