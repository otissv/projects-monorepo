import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const GlassStangeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `GlassStangeIcon ${className}`;
  return (
    <Icon alt="GlassStange" className={classNames} {...propsRest}>
      <path d="M8,2H16V22H8V2M10,4V7H14V4H10Z" />

    </Icon>
  );
};
GlassStangeIcon.displayName = 'GlassStangeIcon';
  