import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RadiusOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RadiusOutlineIcon ${className}`;
  return (
    <Icon alt="RadiusOutline" className={classNames} {...propsRest}>
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16,15V13H13.72C13.36,13.62 12.71,14 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10C12.71,10 13.36,10.38 13.72,11H16V9L19,12L16,15Z" />

    </Icon>
  );
};
RadiusOutlineIcon.displayName = 'RadiusOutlineIcon';
  