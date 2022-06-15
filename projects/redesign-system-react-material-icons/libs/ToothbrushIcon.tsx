import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ToothbrushIcon: FC<IconInterface> = function ToothbrushIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ToothbrushIcon ${className}`;
      return (
        <Icon alt="Toothbrush" className={classNames} {...propsRest}>
          <path d="M12.91 6.43L15.03 8.55L16.09 7.5L15.03 6.43L17.86 3.6L18.92 4.66L20 3.6L17.86 1.5M3 20.57L4.43 22L14.5 11.9L16.63 11.19L21.4 6.43C22.18 5.65 22.18 4.38 21.4 3.6L15.55 9.44L13.43 10.15Z" />

        </Icon>
      );
    };
    ToothbrushIcon.displayName = 'ToothbrushIcon';
      