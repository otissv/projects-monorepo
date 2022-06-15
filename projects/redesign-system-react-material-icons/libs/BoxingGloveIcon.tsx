import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BoxingGloveIcon: FC<IconInterface> = function BoxingGloveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BoxingGloveIcon ${className}`;
      return (
        <Icon alt="BoxingGlove" className={classNames} {...propsRest}>
          <path d="M19,16V6H22V16H19M12,4C8,4 7,4 7,4C7,4 2,4 2,8V14C2,15.77 3,16.76 4.07,17.31C4.4,15.43 6.03,14 8,14H11V16H8A2,2 0 0,0 6,18C6,19.11 6.9,20 8,20H13C17,20 17,16 17,16V6C17,6 16,4 12,4Z" />

        </Icon>
      );
    };
    BoxingGloveIcon.displayName = 'BoxingGloveIcon';
      