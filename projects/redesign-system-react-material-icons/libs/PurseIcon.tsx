import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const PurseIcon: FC<IconInterface> = function PurseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PurseIcon ${className}`;
      return (
        <Icon alt="Purse" className={classNames} {...propsRest}>
          <path d="M22,19.1L21,10.5A1.65,1.65 0 0,0 19.3,9H16V5L14,3H10L8,5V9H4.7A1.65,1.65 0 0,0 3,10.5L2,19.1A1.74,1.74 0 0,0 3.7,21H20.3A1.74,1.74 0 0,0 22,19.1M10,5H14V9H10" />

        </Icon>
      );
    };
    PurseIcon.displayName = 'PurseIcon';
      