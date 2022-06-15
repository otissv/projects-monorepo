import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AlphaRCircleIcon: FC<IconInterface> = function AlphaRCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaRCircleIcon ${className}`;
      return (
        <Icon alt="AlphaRCircle" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaRCircleIcon.displayName = 'AlphaRCircleIcon';
      