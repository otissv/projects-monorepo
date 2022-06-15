import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const LibraryIcon: FC<IconInterface> = function LibraryIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LibraryIcon ${className}`;
      return (
        <Icon alt="Library" className={classNames} {...propsRest}>
          <path d="M12,8A3,3 0 0,0 15,5A3,3 0 0,0 12,2A3,3 0 0,0 9,5A3,3 0 0,0 12,8M12,11.54C9.64,9.35 6.5,8 3,8V19C6.5,19 9.64,20.35 12,22.54C14.36,20.35 17.5,19 21,19V8C17.5,8 14.36,9.35 12,11.54Z" />

        </Icon>
      );
    };
    LibraryIcon.displayName = 'LibraryIcon';
      