import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AlphaQCircleIcon: FC<IconInterface> = function AlphaQCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaQCircleIcon ${className}`;
      return (
        <Icon alt="AlphaQCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17V19H13V17A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9Z" />

        </Icon>
      );
    };
    AlphaQCircleIcon.displayName = 'AlphaQCircleIcon';
      