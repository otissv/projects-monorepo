import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AccountKeyIcon: FC<IconInterface> = function AccountKeyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountKeyIcon ${className}`;
      return (
        <Icon alt="AccountKey" className={classNames} {...propsRest}>
          <path d="M11,10V12H10V14H8V12H5.83C5.42,13.17 4.31,14 3,14A3,3 0 0,1 0,11A3,3 0 0,1 3,8C4.31,8 5.42,8.83 5.83,10H11M3,10A1,1 0 0,0 2,11A1,1 0 0,0 3,12A1,1 0 0,0 4,11A1,1 0 0,0 3,10M16,14C18.67,14 24,15.34 24,18V20H8V18C8,15.34 13.33,14 16,14M16,12A4,4 0 0,1 12,8A4,4 0 0,1 16,4A4,4 0 0,1 20,8A4,4 0 0,1 16,12Z" />

        </Icon>
      );
    };
    AccountKeyIcon.displayName = 'AccountKeyIcon';
      