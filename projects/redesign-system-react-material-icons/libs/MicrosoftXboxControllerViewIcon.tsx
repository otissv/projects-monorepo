import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MicrosoftXboxControllerViewIcon: FC<IconInterface> = function MicrosoftXboxControllerViewIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrosoftXboxControllerViewIcon ${className}`;
      return (
        <Icon alt="MicrosoftXboxControllerView" className={classNames} {...propsRest}>
          <path d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M6,7H15V9H8V14H6V7M9,10H18V17H9V10M11,12V15H16V12H11Z" />

        </Icon>
      );
    };
    MicrosoftXboxControllerViewIcon.displayName = 'MicrosoftXboxControllerViewIcon';
      