import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const AccountSettingsIcon: FC<IconInterface> = function AccountSettingsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AccountSettingsIcon ${className}`;
      return (
        <Icon alt="AccountSettings" className={classNames} {...propsRest}>
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" />

        </Icon>
      );
    };
    AccountSettingsIcon.displayName = 'AccountSettingsIcon';
      