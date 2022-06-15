import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const PencilBoxMultipleOutlineIcon: FC<IconInterface> = function PencilBoxMultipleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PencilBoxMultipleOutlineIcon ${className}`;
      return (
        <Icon alt="PencilBoxMultipleOutline" className={classNames} {...propsRest}>
          <path d="M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6M18.7 7.35L17.7 8.35L15.65 6.3L16.65 5.3C16.86 5.08 17.21 5.08 17.42 5.3L18.7 6.58C18.92 6.79 18.92 7.14 18.7 7.35M9 12.94L15.06 6.88L17.12 8.94L11.06 15H9V12.94M20 4L20 4L20 16L8 16L8 4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />

        </Icon>
      );
    };
    PencilBoxMultipleOutlineIcon.displayName = 'PencilBoxMultipleOutlineIcon';
      