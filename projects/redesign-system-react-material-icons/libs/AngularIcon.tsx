import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AngularIcon: FC<IconInterface> = function AngularIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AngularIcon ${className}`;
      return (
        <Icon alt="Angular" className={classNames} {...propsRest}>
          <path d="M12,2.5L20.84,5.65L19.5,17.35L12,21.5L4.5,17.35L3.16,5.65L12,2.5M12,4.6L6.47,17H8.53L9.64,14.22H14.34L15.45,17H17.5L12,4.6M13.62,12.5H10.39L12,8.63L13.62,12.5Z" />

        </Icon>
      );
    };
    AngularIcon.displayName = 'AngularIcon';
      