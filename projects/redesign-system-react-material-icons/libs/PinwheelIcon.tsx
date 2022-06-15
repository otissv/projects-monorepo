import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const PinwheelIcon: FC<IconInterface> = function PinwheelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PinwheelIcon ${className}`;
      return (
        <Icon alt="Pinwheel" className={classNames} {...propsRest}>
          <path d="M12,12C12,9 14.5,6.5 17.5,6.5C20.5,6.5 23,9 23,12H12M12,12C12,15 9.5,17.5 6.5,17.5C3.5,17.5 1,15 1,12H12M12,12C9,12 6.5,9.5 6.5,6.5C6.5,3.5 9,1 12,1V12M12,12C15,12 17.5,14.5 17.5,17.5C17.5,20.5 15,23 12,23V12Z" />

        </Icon>
      );
    };
    PinwheelIcon.displayName = 'PinwheelIcon';
      