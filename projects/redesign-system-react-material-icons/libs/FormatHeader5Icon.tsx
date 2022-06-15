import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FormatHeader5Icon: FC<IconInterface> = function FormatHeader5Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeader5Icon ${className}`;
      return (
        <Icon alt="FormatHeader5" className={classNames} {...propsRest}>
          <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z" />

        </Icon>
      );
    };
    FormatHeader5Icon.displayName = 'FormatHeader5Icon';
      