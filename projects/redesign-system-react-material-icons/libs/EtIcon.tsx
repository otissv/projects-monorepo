import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EtIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EtIcon ${className}`;
  return (
    <Icon alt="Et" className={classNames} {...propsRest}>
      <path d="M23,8.78L21.71,7.22C21.45,7.42 20.53,8 19.77,8C19.26,8 18.3,7.75 17.45,7.53C16.39,7.26 15.39,7 14.6,7C14,7 13.43,7.15 12.93,7.35C12.62,5.45 11,4 9,4C4.58,4 2,7.58 2,12C2,16.42 5.58,19 10,19C12.06,19 13.93,18.43 15.34,17.39L15,21.29L17,21.47L18,9.74C18.66,9.89 19.27,10 19.77,10C21.38,10 22.84,8.91 23,8.78M9,6A2,2 0 0,1 11,8A2,2 0 0,1 9,10H4.23C4.8,7.67 6.39,6 9,6M10,17C6.69,17 4,15.31 4,12H9C10.6,12 11.83,11.17 12.5,9.91V9.91C12.76,9.71 13.85,9 14.6,9C14.94,9 15.5,9.11 16.05,9.25L15.65,13.89C14.82,15.95 12.6,17 10,17Z" />

    </Icon>
  );
};
EtIcon.displayName = 'EtIcon';
  