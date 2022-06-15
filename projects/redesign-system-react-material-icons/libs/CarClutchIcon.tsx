import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const CarClutchIcon: FC<IconInterface> = function CarClutchIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CarClutchIcon ${className}`;
      return (
        <Icon alt="CarClutch" className={classNames} {...propsRest}>
          <path d="M10 18.84L14 20.7V23L8 20V14H5V10H8V4L14 1V3.3L10 5.16V18.84M19 10H15V5.41L12 6.8V17.2L15 18.6V14H19V10Z" />

        </Icon>
      );
    };
    CarClutchIcon.displayName = 'CarClutchIcon';
      