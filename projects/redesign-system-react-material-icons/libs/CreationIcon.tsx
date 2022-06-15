import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CreationIcon: FC<IconInterface> = function CreationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CreationIcon ${className}`;
      return (
        <Icon alt="Creation" className={classNames} {...propsRest}>
          <path d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74" />

        </Icon>
      );
    };
    CreationIcon.displayName = 'CreationIcon';
      