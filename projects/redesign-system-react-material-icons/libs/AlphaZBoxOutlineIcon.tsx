import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AlphaZBoxOutlineIcon: FC<IconInterface> = function AlphaZBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaZBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaZBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaZBoxOutlineIcon.displayName = 'AlphaZBoxOutlineIcon';
      