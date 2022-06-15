import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const EthernetCableOffIcon: FC<IconInterface> = function EthernetCableOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EthernetCableOffIcon ${className}`;
      return (
        <Icon alt="EthernetCableOff" className={classNames} {...propsRest}>
          <path d="M11,3H13V7H11V3M8,4H10V8H14V4H16V11H12.82L8,6.18V4M20,20.72L18.73,22L14,17.27V22H10V13.27L2,5.27L3.28,4L20,20.72Z" />

        </Icon>
      );
    };
    EthernetCableOffIcon.displayName = 'EthernetCableOffIcon';
      