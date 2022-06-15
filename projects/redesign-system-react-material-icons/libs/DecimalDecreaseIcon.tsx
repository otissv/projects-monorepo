import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const DecimalDecreaseIcon: FC<IconInterface> = function DecimalDecreaseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DecimalDecreaseIcon ${className}`;
      return (
        <Icon alt="DecimalDecrease" className={classNames} {...propsRest}>
          <path d="M12,17L15,20V18H21V16H15V14L12,17M9,5A3,3 0 0,1 12,8V11A3,3 0 0,1 9,14A3,3 0 0,1 6,11V8A3,3 0 0,1 9,5M9,7A1,1 0 0,0 8,8V11A1,1 0 0,0 9,12A1,1 0 0,0 10,11V8A1,1 0 0,0 9,7M4,12A1,1 0 0,1 5,13A1,1 0 0,1 4,14A1,1 0 0,1 3,13A1,1 0 0,1 4,12Z" />

        </Icon>
      );
    };
    DecimalDecreaseIcon.displayName = 'DecimalDecreaseIcon';
      