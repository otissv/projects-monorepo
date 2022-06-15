import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MicrophoneOutlineIcon: FC<IconInterface> = function MicrophoneOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrophoneOutlineIcon ${className}`;
      return (
        <Icon alt="MicrophoneOutline" className={classNames} {...propsRest}>
          <path d="M17.3,11C17.3,14 14.76,16.1 12,16.1C9.24,16.1 6.7,14 6.7,11H5C5,14.41 7.72,17.23 11,17.72V21H13V17.72C16.28,17.23 19,14.41 19,11M10.8,4.9C10.8,4.24 11.34,3.7 12,3.7C12.66,3.7 13.2,4.24 13.2,4.9L13.19,11.1C13.19,11.76 12.66,12.3 12,12.3C11.34,12.3 10.8,11.76 10.8,11.1M12,14A3,3 0 0,0 15,11V5A3,3 0 0,0 12,2A3,3 0 0,0 9,5V11A3,3 0 0,0 12,14Z" />

        </Icon>
      );
    };
    MicrophoneOutlineIcon.displayName = 'MicrophoneOutlineIcon';
      