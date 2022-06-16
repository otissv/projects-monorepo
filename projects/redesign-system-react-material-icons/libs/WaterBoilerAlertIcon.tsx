import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const WaterBoilerAlertIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `WaterBoilerAlertIcon ${className}`;
  return (
    <Icon alt="WaterBoilerAlert" className={classNames} {...propsRest}>
      <path d="M6 2C4.89 2 4 2.89 4 4V16C4 17.11 4.89 18 6 18H7V20H4V22H7C8.11 22 9 21.11 9 20V18H11V20C11 21.11 11.89 22 13 22H16V20H13V18H14C15.11 18 16 17.11 16 16V4C16 2.89 15.11 2 14 2H6M10 4.97C11.11 4.97 12 5.87 12 6.97S11.11 8.97 10 8.97C8.9 8.97 8 8.07 8 6.97C8 5.87 8.9 4.97 10 4.97M8 14.5H12V16H8V14.5M18 15H20V17H18V15M18 7H20V13H18V7Z" />

    </Icon>
  );
};
WaterBoilerAlertIcon.displayName = 'WaterBoilerAlertIcon';
  