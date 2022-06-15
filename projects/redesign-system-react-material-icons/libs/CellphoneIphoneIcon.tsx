import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CellphoneIphoneIcon: FC<IconInterface> = function CellphoneIphoneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneIphoneIcon ${className}`;
      return (
        <Icon alt="CellphoneIphone" className={classNames} {...propsRest}>
          <path d="M16,18H7V4H16M11.5,22A1.5,1.5 0 0,1 10,20.5A1.5,1.5 0 0,1 11.5,19A1.5,1.5 0 0,1 13,20.5A1.5,1.5 0 0,1 11.5,22M15.5,1H7.5A2.5,2.5 0 0,0 5,3.5V20.5A2.5,2.5 0 0,0 7.5,23H15.5A2.5,2.5 0 0,0 18,20.5V3.5A2.5,2.5 0 0,0 15.5,1Z" />

        </Icon>
      );
    };
    CellphoneIphoneIcon.displayName = 'CellphoneIphoneIcon';
      