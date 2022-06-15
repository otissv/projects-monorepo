import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FlashAutoIcon: FC<IconInterface> = function FlashAutoIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlashAutoIcon ${className}`;
      return (
        <Icon alt="FlashAuto" className={classNames} {...propsRest}>
          <path d="M16.85,7.65L18,4L19.15,7.65M19,2H17L13.8,11H15.7L16.4,9H19.6L20.3,11H22.2M3,2V14H6V23L13,11H9L13,2H3Z" />

        </Icon>
      );
    };
    FlashAutoIcon.displayName = 'FlashAutoIcon';
      