import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ChurchIcon: FC<IconInterface> = function ChurchIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChurchIcon ${className}`;
      return (
        <Icon alt="Church" className={classNames} {...propsRest}>
          <path d="M11,2H13V4H15V6H13V9.4L22,13V15L20,14.2V22H14V17A2,2 0 0,0 12,15A2,2 0 0,0 10,17V22H4V14.2L2,15V13L11,9.4V6H9V4H11V2M6,20H8V15L7,14L6,15V20M16,20H18V15L17,14L16,15V20Z" />

        </Icon>
      );
    };
    ChurchIcon.displayName = 'ChurchIcon';
      