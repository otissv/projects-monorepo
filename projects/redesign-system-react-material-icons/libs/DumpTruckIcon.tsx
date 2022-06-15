import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const DumpTruckIcon: FC<IconInterface> = function DumpTruckIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DumpTruckIcon ${className}`;
      return (
        <Icon alt="DumpTruck" className={classNames} {...propsRest}>
          <path d="M20,8H19L17,8H15V14H2V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M17,12V9.5H19.5L21.46,12H17M18,7H14V13H3L1.57,8H1V6H13L14,5H18V7Z" />

        </Icon>
      );
    };
    DumpTruckIcon.displayName = 'DumpTruckIcon';
      