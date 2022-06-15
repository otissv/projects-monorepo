import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const BorderLeftVariantIcon: FC<IconInterface> = function BorderLeftVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BorderLeftVariantIcon ${className}`;
      return (
        <Icon alt="BorderLeftVariant" className={classNames} {...propsRest}>
          <path d="M15,5H17V3H15M19,21H21V19H19M19,13H21V11H19M19,5H21V3H19M19,17H21V15H19M15,21H17V19H15M19,9H21V7H19M3,21H5V3H3M7,5H9V3H7M7,21H9V19H7M11,5H13V3H11M11,21H13V19H11V21Z" />

        </Icon>
      );
    };
    BorderLeftVariantIcon.displayName = 'BorderLeftVariantIcon';
      