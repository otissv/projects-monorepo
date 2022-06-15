import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AlphaQIcon: FC<IconInterface> = function AlphaQIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaQIcon ${className}`;
      return (
        <Icon alt="AlphaQ" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17V19H13V17A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9Z" />

        </Icon>
      );
    };
    AlphaQIcon.displayName = 'AlphaQIcon';
      