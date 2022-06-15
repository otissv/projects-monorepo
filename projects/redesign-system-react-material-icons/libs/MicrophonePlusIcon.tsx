import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MicrophonePlusIcon: FC<IconInterface> = function MicrophonePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrophonePlusIcon ${className}`;
      return (
        <Icon alt="MicrophonePlus" className={classNames} {...propsRest}>
          <path d="M9,2A3,3 0 0,1 12,5V11A3,3 0 0,1 9,14A3,3 0 0,1 6,11V5A3,3 0 0,1 9,2M16,11C16,14.5 13.44,17.43 10,17.93V21H8V17.93C4.56,17.43 2,14.5 2,11H4A5,5 0 0,0 9,16A5,5 0 0,0 14,11H16M15,5H18V2H20V5H23V7H20V10H18V7H15V5Z" />

        </Icon>
      );
    };
    MicrophonePlusIcon.displayName = 'MicrophonePlusIcon';
      