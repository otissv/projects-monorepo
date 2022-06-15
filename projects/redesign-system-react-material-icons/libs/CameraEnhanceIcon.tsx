import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CameraEnhanceIcon: FC<IconInterface> = function CameraEnhanceIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CameraEnhanceIcon ${className}`;
      return (
        <Icon alt="CameraEnhance" className={classNames} {...propsRest}>
          <path d="M9,3L7.17,5H4A2,2 0 0,0 2,7V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V7A2,2 0 0,0 20,5H16.83L15,3M12,18A5,5 0 0,1 7,13A5,5 0 0,1 12,8A5,5 0 0,1 17,13A5,5 0 0,1 12,18M12,17L13.25,14.25L16,13L13.25,11.75L12,9L10.75,11.75L8,13L10.75,14.25" />

        </Icon>
      );
    };
    CameraEnhanceIcon.displayName = 'CameraEnhanceIcon';
      