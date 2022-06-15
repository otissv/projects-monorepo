import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MultiplicationIcon: FC<IconInterface> = function MultiplicationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MultiplicationIcon ${className}`;
      return (
        <Icon alt="Multiplication" className={classNames} {...propsRest}>
          <path d="M11,3H13V10.27L19.29,6.64L20.29,8.37L14,12L20.3,15.64L19.3,17.37L13,13.72V21H11V13.73L4.69,17.36L3.69,15.63L10,12L3.72,8.36L4.72,6.63L11,10.26V3Z" />

        </Icon>
      );
    };
    MultiplicationIcon.displayName = 'MultiplicationIcon';
      