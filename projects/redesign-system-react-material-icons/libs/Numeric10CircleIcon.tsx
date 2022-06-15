import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const Numeric10CircleIcon: FC<IconInterface> = function Numeric10CircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `Numeric10CircleIcon ${className}`;
      return (
        <Icon alt="Numeric10Circle" className={classNames} {...propsRest}>
          <path d="M14 9H16V15H14V9M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12 6.5 2 12 2 22 6.5 22 12M10 7H6V9H8V17H10V7M18 9C18 7.9 17.11 7 16 7H14C12.9 7 12 7.9 12 9V15C12 16.11 12.9 17 14 17H16C17.11 17 18 16.11 18 15V9Z" />

        </Icon>
      );
    };
    Numeric10CircleIcon.displayName = 'Numeric10CircleIcon';
      