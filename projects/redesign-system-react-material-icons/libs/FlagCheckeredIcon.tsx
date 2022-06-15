import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FlagCheckeredIcon: FC<IconInterface> = function FlagCheckeredIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlagCheckeredIcon ${className}`;
      return (
        <Icon alt="FlagCheckered" className={classNames} {...propsRest}>
          <path d="M14.4,6H20V16H13L12.6,14H7V21H5V4H14L14.4,6M14,14H16V12H18V10H16V8H14V10L13,8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14,12V14M11,10V8H13V10H11M14,10H16V12H14V10Z" />

        </Icon>
      );
    };
    FlagCheckeredIcon.displayName = 'FlagCheckeredIcon';
      