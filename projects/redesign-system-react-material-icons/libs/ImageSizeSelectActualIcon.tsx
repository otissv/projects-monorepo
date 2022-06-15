import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ImageSizeSelectActualIcon: FC<IconInterface> = function ImageSizeSelectActualIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImageSizeSelectActualIcon ${className}`;
      return (
        <Icon alt="ImageSizeSelectActual" className={classNames} {...propsRest}>
          <path d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />

        </Icon>
      );
    };
    ImageSizeSelectActualIcon.displayName = 'ImageSizeSelectActualIcon';
      