import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const DigitalOceanIcon: FC<IconInterface> = function DigitalOceanIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DigitalOceanIcon ${className}`;
      return (
        <Icon alt="DigitalOcean" className={classNames} {...propsRest}>
          <path d="M6 12H2C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22V18H8V14H12V18C15.32 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12M8 18V21H5V18H8M3 16H5V18H3V16Z" />

        </Icon>
      );
    };
    DigitalOceanIcon.displayName = 'DigitalOceanIcon';
      