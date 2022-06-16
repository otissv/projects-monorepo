import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PotSteamOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PotSteamOutlineIcon ${className}`;
  return (
    <Icon alt="PotSteamOutline" className={classNames} {...propsRest}>
      <path d="M8 1.5C6.15 1.5 4.65 3 4.65 4.85C4.65 6.7 6.15 8.2 8 8.2H9.53C9.92 8.2 10.29 8.3 10.61 8.5H12.63C12.05 7.45 10.86 6.75 9.53 6.75H8C7 6.75 6.15 5.77 6.15 4.75C6.15 3.73 7 3 8 3V1.5M12.85 2C12.85 3 12 3.85 11 3.85V5.35C12.92 5.35 14.5 6.7 14.89 8.5H16.42C16.12 6.67 14.96 5.15 13.35 4.38C13.97 3.77 14.35 2.93 14.35 2H12.85M3 10V12H5V19C5 20.11 5.9 21 7 21H17C18.11 21 19 20.11 19 19V12H21V10H3M7 12H17V19H7V12Z" />

    </Icon>
  );
};
PotSteamOutlineIcon.displayName = 'PotSteamOutlineIcon';
  