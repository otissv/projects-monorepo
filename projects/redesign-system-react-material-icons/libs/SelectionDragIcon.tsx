import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const SelectionDragIcon: FC<IconInterface> = function SelectionDragIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SelectionDragIcon ${className}`;
      return (
        <Icon alt="SelectionDrag" className={classNames} {...propsRest}>
          <path d="M14,17H17V14H19V17H22V19H19V22H17V19H14V17M12,17V19H9V17H12M7,17V19H3V15H5V17H7M3,13V10H5V13H3M3,8V4H7V6H5V8H3M9,4H12V6H9V4M15,4H19V8H17V6H15V4M19,10V12H17V10H19Z" />

        </Icon>
      );
    };
    SelectionDragIcon.displayName = 'SelectionDragIcon';
      