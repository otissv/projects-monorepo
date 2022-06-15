import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const EthernetIcon: FC<IconInterface> = function EthernetIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EthernetIcon ${className}`;
      return (
        <Icon alt="Ethernet" className={classNames} {...propsRest}>
          <path d="M7,15H9V18H11V15H13V18H15V15H17V18H19V9H15V6H9V9H5V18H7V15M4.38,3H19.63C20.94,3 22,4.06 22,5.38V19.63A2.37,2.37 0 0,1 19.63,22H4.38C3.06,22 2,20.94 2,19.63V5.38C2,4.06 3.06,3 4.38,3Z" />

        </Icon>
      );
    };
    EthernetIcon.displayName = 'EthernetIcon';
      