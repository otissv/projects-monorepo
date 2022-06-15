import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SyllabaryKatakanaIcon: FC<IconInterface> = function SyllabaryKatakanaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SyllabaryKatakanaIcon ${className}`;
      return (
        <Icon alt="SyllabaryKatakana" className={classNames} {...propsRest}>
          <path d="M4 4V6H18V6.09L14.29 9.79L15.71 11.21L20 6.91V4M11 9V13C11 15.78 10.25 16.89 8.36 18.46L9.64 20C11.75 18.24 13 16.22 13 13V9Z" />

        </Icon>
      );
    };
    SyllabaryKatakanaIcon.displayName = 'SyllabaryKatakanaIcon';
      