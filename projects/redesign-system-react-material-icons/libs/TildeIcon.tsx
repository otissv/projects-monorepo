import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const TildeIcon: FC<IconInterface> = function TildeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TildeIcon ${className}`;
      return (
        <Icon alt="Tilde" className={classNames} {...propsRest}>
          <path d="M2,15C2,15 2,9 8,9C12,9 12.5,12.5 15.5,12.5C19.5,12.5 19.5,9 19.5,9H22C22,9 22,15 16,15C12,15 10.5,11.5 8.5,11.5C4.5,11.5 4.5,15 4.5,15H2" />

        </Icon>
      );
    };
    TildeIcon.displayName = 'TildeIcon';
      