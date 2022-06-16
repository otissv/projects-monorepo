import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ReloadIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ReloadIcon ${className}`;
  return (
    <Icon alt="Reload" className={classNames} {...propsRest}>
      <path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" />

    </Icon>
  );
};
ReloadIcon.displayName = 'ReloadIcon';
  