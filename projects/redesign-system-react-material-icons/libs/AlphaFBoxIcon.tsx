import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AlphaFBoxIcon: FC<IconInterface> = function AlphaFBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaFBoxIcon ${className}`;
      return (
        <Icon alt="AlphaFBox" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13H14V11H11V9H15V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaFBoxIcon.displayName = 'AlphaFBoxIcon';
      