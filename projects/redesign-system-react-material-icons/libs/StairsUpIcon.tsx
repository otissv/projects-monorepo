import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const StairsUpIcon: FC<IconInterface> = function StairsUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StairsUpIcon ${className}`;
      return (
        <Icon alt="StairsUp" className={classNames} {...propsRest}>
          <path d="M15 6H22V9H18V13H14V17H10V21H3V18H7V14H11V10H15V6M10.17 6.66L4.66 12.17L2.83 10.34L8.34 4.83L6.5 3H12V8.5L10.17 6.66Z" />

        </Icon>
      );
    };
    StairsUpIcon.displayName = 'StairsUpIcon';
      