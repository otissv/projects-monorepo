import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ShieldStarOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ShieldStarOutlineIcon ${className}`;
  return (
    <Icon alt="ShieldStarOutline" className={classNames} {...propsRest}>
      <path d="M21 11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1L21 5V11M12 21C15.75 20 19 15.54 19 11.22V6.3L12 3.18L5 6.3V11.22C5 15.54 8.25 20 12 21M15.05 16L11.97 14.15L8.9 16L9.71 12.5L7 10.16L10.58 9.85L11.97 6.55L13.37 9.84L16.95 10.15L14.23 12.5L15.05 16" />

    </Icon>
  );
};
ShieldStarOutlineIcon.displayName = 'ShieldStarOutlineIcon';
  