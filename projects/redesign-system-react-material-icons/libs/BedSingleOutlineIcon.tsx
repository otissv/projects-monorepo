import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BedSingleOutlineIcon: FC<IconInterface> = function BedSingleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BedSingleOutlineIcon ${className}`;
      return (
        <Icon alt="BedSingleOutline" className={classNames} {...propsRest}>
          <path d="M17 10V7C17 5.9 16.11 5 15 5H9C7.9 5 7 5.9 7 7V10C5.9 10 5 10.9 5 12V17H6.33L7 19H8L8.67 17H15.33L16 19H17L17.67 17H19V12C19 10.9 18.11 10 17 10M9 7H15V10H9M17 15H7V12H17Z" />

        </Icon>
      );
    };
    BedSingleOutlineIcon.displayName = 'BedSingleOutlineIcon';
      