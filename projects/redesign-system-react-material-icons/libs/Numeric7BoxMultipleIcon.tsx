import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const Numeric7BoxMultipleIcon: FC<IconInterface> = function Numeric7BoxMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric7BoxMultipleIcon ${className}`;
      return (
        <Icon alt="Numeric7BoxMultiple" className={classNames} {...propsRest}>
          <path d="M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M13,15L17,7V5H11V7H15L11,15H13M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21Z" />

        </Icon>
      );
    };
    Numeric7BoxMultipleIcon.displayName = 'Numeric7BoxMultipleIcon';
      