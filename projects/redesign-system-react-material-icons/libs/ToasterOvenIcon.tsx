import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ToasterOvenIcon: FC<IconInterface> = function ToasterOvenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToasterOvenIcon ${className}`;
      return (
        <Icon alt="ToasterOven" className={classNames} {...propsRest}>
          <path d="M4,5A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7A2,2 0 0,0 20,5H4M4,7H16V17H4V7M19,7A1,1 0 0,1 20,8A1,1 0 0,1 19,9A1,1 0 0,1 18,8A1,1 0 0,1 19,7M6,9V11H14V9H6M19,11A1,1 0 0,1 20,12A1,1 0 0,1 19,13A1,1 0 0,1 18,12A1,1 0 0,1 19,11Z" />

        </Icon>
      );
    };
    ToasterOvenIcon.displayName = 'ToasterOvenIcon';
      