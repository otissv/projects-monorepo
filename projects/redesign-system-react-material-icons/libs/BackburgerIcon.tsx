import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BackburgerIcon: FC<IconInterface> = function BackburgerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BackburgerIcon ${className}`;
      return (
        <Icon alt="Backburger" className={classNames} {...propsRest}>
          <path d="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z" />

        </Icon>
      );
    };
    BackburgerIcon.displayName = 'BackburgerIcon';
      