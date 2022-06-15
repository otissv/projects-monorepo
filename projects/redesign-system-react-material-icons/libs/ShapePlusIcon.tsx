import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ShapePlusIcon: FC<IconInterface> = function ShapePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShapePlusIcon ${className}`;
      return (
        <Icon alt="ShapePlus" className={classNames} {...propsRest}>
          <path d="M2,2H11V11H2V2M17.5,2C20,2 22,4 22,6.5C22,9 20,11 17.5,11C15,11 13,9 13,6.5C13,4 15,2 17.5,2M6.5,14L11,22H2L6.5,14M19,17H22V19H19V22H17V19H14V17H17V14H19V17Z" />

        </Icon>
      );
    };
    ShapePlusIcon.displayName = 'ShapePlusIcon';
      