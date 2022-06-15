import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const PotMixIcon: FC<IconInterface> = function PotMixIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PotMixIcon ${className}`;
      return (
        <Icon alt="PotMix" className={classNames} {...propsRest}>
          <path d="M14.6 9L18 3.1L19.7 4.1L16.9 9H14.6M14 10H3V12H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V12H21V10H14Z" />

        </Icon>
      );
    };
    PotMixIcon.displayName = 'PotMixIcon';
      