import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const DockBottomIcon: FC<IconInterface> = function DockBottomIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DockBottomIcon ${className}`;
      return (
        <Icon alt="DockBottom" className={classNames} {...propsRest}>
          <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 13H4V6H20Z" />

        </Icon>
      );
    };
    DockBottomIcon.displayName = 'DockBottomIcon';
      