import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const EmailMultipleIcon: FC<IconInterface> = function EmailMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailMultipleIcon ${className}`;
      return (
        <Icon alt="EmailMultiple" className={classNames} {...propsRest}>
          <path d="M22,6V4L14,9L6,4V6L14,11L22,6M22,2A2,2 0 0,1 24,4V16A2,2 0 0,1 22,18H6C4.89,18 4,17.1 4,16V4C4,2.89 4.89,2 6,2H22M2,6V20H20V22H2A2,2 0 0,1 0,20V6H2Z" />

        </Icon>
      );
    };
    EmailMultipleIcon.displayName = 'EmailMultipleIcon';
      