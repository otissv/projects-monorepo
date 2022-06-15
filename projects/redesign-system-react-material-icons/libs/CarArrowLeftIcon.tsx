import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CarArrowLeftIcon: FC<IconInterface> = function CarArrowLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CarArrowLeftIcon ${className}`;
      return (
        <Icon alt="CarArrowLeft" className={classNames} {...propsRest}>
          <path d="M12 18C12 14.69 14.69 12 18 12C19.09 12 20.12 12.3 21 12.81V12L18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H12.09C12.04 18.67 12 18.34 12 18M6.5 6.5H17.5L19 11H5L6.5 6.5M6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16M18 15V17H22V19H18V21L15 18L18 15" />

        </Icon>
      );
    };
    CarArrowLeftIcon.displayName = 'CarArrowLeftIcon';
      