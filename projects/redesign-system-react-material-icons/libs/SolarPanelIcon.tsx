import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SolarPanelIcon: FC<IconInterface> = function SolarPanelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SolarPanelIcon ${className}`;
      return (
        <Icon alt="SolarPanel" className={classNames} {...propsRest}>
          <path d="M4,2H20A2,2 0 0,1 22,4V14A2,2 0 0,1 20,16H15V20H18V22H13V16H11V22H6V20H9V16H4A2,2 0 0,1 2,14V4A2,2 0 0,1 4,2M4,4V8H11V4H4M4,14H11V10H4V14M20,14V10H13V14H20M20,4H13V8H20V4Z" />

        </Icon>
      );
    };
    SolarPanelIcon.displayName = 'SolarPanelIcon';
      