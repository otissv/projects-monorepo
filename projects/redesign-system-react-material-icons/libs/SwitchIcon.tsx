import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SwitchIcon: FC<IconInterface> = function SwitchIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SwitchIcon ${className}`;
      return (
        <Icon alt="Switch" className={classNames} {...propsRest}>
          <path d="M13,18H14A1,1 0 0,1 15,19H22V21H15A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21H2V19H9A1,1 0 0,1 10,18H11V16H8A1,1 0 0,1 7,15V3A1,1 0 0,1 8,2H16A1,1 0 0,1 17,3V15A1,1 0 0,1 16,16H13V18M13,6H14V4H13V6M9,4V6H11V4H9M9,8V10H11V8H9M9,12V14H11V12H9Z" />

        </Icon>
      );
    };
    SwitchIcon.displayName = 'SwitchIcon';
      