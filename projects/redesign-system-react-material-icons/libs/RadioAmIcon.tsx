import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const RadioAmIcon: FC<IconInterface> = function RadioAmIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RadioAmIcon ${className}`;
      return (
        <Icon alt="RadioAm" className={classNames} {...propsRest}>
          <path d="M5,7A2,2 0 0,0 3,9V17H5V13H7V17H9V9A2,2 0 0,0 7,7H5M5,9H7V11H5V9M13,7A2,2 0 0,0 11,9V17H13V9H15V16H17V9H19V17H21V9A2,2 0 0,0 19,7H13Z" />

        </Icon>
      );
    };
    RadioAmIcon.displayName = 'RadioAmIcon';
      