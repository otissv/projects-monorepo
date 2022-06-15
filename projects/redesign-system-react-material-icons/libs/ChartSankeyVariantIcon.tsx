import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const ChartSankeyVariantIcon: FC<IconInterface> = function ChartSankeyVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChartSankeyVariantIcon ${className}`;
      return (
        <Icon alt="ChartSankeyVariant" className={classNames} {...propsRest}>
          <path d="M20 4V6H4V4H2V12H4V10C8.16 10 9.92 12.11 11.77 14.34S15.65 19 20 19V21H22V15H20V17C16.59 17 15.07 15.17 13.31 13.06C11.34 10.69 9.1 8 4 8H20V10H22V4Z" />

        </Icon>
      );
    };
    ChartSankeyVariantIcon.displayName = 'ChartSankeyVariantIcon';
      