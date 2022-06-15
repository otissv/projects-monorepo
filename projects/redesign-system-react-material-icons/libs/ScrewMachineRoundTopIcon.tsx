import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ScrewMachineRoundTopIcon: FC<IconInterface> = function ScrewMachineRoundTopIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ScrewMachineRoundTopIcon ${className}`;
      return (
        <Icon alt="ScrewMachineRoundTop" className={classNames} {...propsRest}>
          <path d="M14.5,7.3L13.5,8V7H10.5V10L9.5,10.7V11.7L14.5,8.4V7.3M14.5,11.3L13.5,12V10L10.5,12V14L9.5,14.7V15.7L14.5,12.4V11.3M14.5,15.3L13.5,16V14L10.5,16V18L9.5,18.7V19.7L14.5,16.4V15.3M7,6H17C17,6 16,3 12,3C8,3 7,6 7,6M13.5,18V21H10.5V20L13.5,18Z" />

        </Icon>
      );
    };
    ScrewMachineRoundTopIcon.displayName = 'ScrewMachineRoundTopIcon';
      