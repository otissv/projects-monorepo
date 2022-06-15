import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ChairRollingIcon: FC<IconInterface> = function ChairRollingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChairRollingIcon ${className}`;
      return (
        <Icon alt="ChairRolling" className={classNames} {...propsRest}>
          <path d="M22 10V13H19V10H22M2 13H5V10H2V13M17 5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V13H17V5M7 15H6V17H11V18L7 22H9.8L12 19.8L14.2 22H17L13 18V17H18V15H7Z" />

        </Icon>
      );
    };
    ChairRollingIcon.displayName = 'ChairRollingIcon';
      