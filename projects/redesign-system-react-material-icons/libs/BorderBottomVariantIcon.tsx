import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BorderBottomVariantIcon: FC<IconInterface> = function BorderBottomVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BorderBottomVariantIcon ${className}`;
      return (
        <Icon alt="BorderBottomVariant" className={classNames} {...propsRest}>
          <path d="M5,15H3V17H5M3,21H21V19H3M5,11H3V13H5M19,9H21V7H19M19,5H21V3H19M5,7H3V9H5M19,17H21V15H19M19,13H21V11H19M17,3H15V5H17M13,3H11V5H13M5,3H3V5H5M9,3H7V5H9" />

        </Icon>
      );
    };
    BorderBottomVariantIcon.displayName = 'BorderBottomVariantIcon';
      