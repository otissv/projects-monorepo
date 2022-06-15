import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CellphoneEraseIcon: FC<IconInterface> = function CellphoneEraseIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneEraseIcon ${className}`;
      return (
        <Icon alt="CellphoneErase" className={classNames} {...propsRest}>
          <path d="M11,8.2L10,7.2L6,11.2L2,7.2L1,8.2L5,12.2L1,16.2L2,17.2L6,13.2L10,17.2L11,16.2L7,12.2L11,8.2M17,1H7A2,2 0 0,0 5,3V6H7V4H17V20H7V18H5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1Z" />

        </Icon>
      );
    };
    CellphoneEraseIcon.displayName = 'CellphoneEraseIcon';
      