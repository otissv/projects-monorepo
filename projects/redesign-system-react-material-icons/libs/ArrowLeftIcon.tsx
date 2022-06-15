import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ArrowLeftIcon: FC<IconInterface> = function ArrowLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftIcon ${className}`;
      return (
        <Icon alt="ArrowLeft" className={classNames} {...propsRest}>
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />

        </Icon>
      );
    };
    ArrowLeftIcon.displayName = 'ArrowLeftIcon';
      