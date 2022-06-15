import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const EmailReceiveOutlineIcon: FC<IconInterface> = function EmailReceiveOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmailReceiveOutlineIcon ${className}`;
      return (
        <Icon alt="EmailReceiveOutline" className={classNames} {...propsRest}>
          <path d="M22 20H18V23L13 18.5L18 14V17H22V20M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V15H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z" />

        </Icon>
      );
    };
    EmailReceiveOutlineIcon.displayName = 'EmailReceiveOutlineIcon';
      