import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/react";
    export const FormatFloatRightIcon: FC<IconInterface> = function FormatFloatRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatFloatRightIcon ${className}`;
      return (
        <Icon alt="FormatFloatRight" className={classNames} {...propsRest}>
          <path d="M15,7H21V13H15V7M3,3H21V5H3V3M13,7V9H3V7H13M9,11V13H3V11H9M3,15H17V17H3V15M3,19H21V21H3V19Z" />

        </Icon>
      );
    };
    FormatFloatRightIcon.displayName = 'FormatFloatRightIcon';
      