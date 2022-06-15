import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const MicroSdIcon: FC<IconInterface> = function MicroSdIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicroSdIcon ${className}`;
      return (
        <Icon alt="MicroSd" className={classNames} {...propsRest}>
          <path d="M8,2A2,2 0 0,0 6,4V11L4,13V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H8M9,4H11V8H9V4M12,4H14V8H12V4M15,4H17V8H15V4Z" />

        </Icon>
      );
    };
    MicroSdIcon.displayName = 'MicroSdIcon';
      