import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ShakerIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ShakerIcon ${className}`;
  return (
    <Icon alt="Shaker" className={classNames} {...propsRest}>
      <path d="M7 16C7 16.55 6.55 17 6 17S5 16.55 5 16C5 15.45 5.45 15 6 15S7 15.45 7 16M9 16C8.45 16 8 16.45 8 17S8.45 18 9 18 10 17.55 10 17 9.55 16 9 16M4 18C3.45 18 3 18.45 3 19S3.45 20 4 20 5 19.55 5 19 4.55 18 4 18M7 19C6.45 19 6 19.45 6 20S6.45 21 7 21 8 20.55 8 20 7.55 19 7 19M15.33 2.72L9.8 9.65L13.34 13.19L20.28 7.67C21.18 6.91 21.25 5.54 20.41 4.7L18.3 2.59C17.46 1.75 16.09 1.82 15.33 2.72M8.39 12.5L10.5 14.6C10.9 15 11.54 15 11.93 14.6L12.63 13.9L9.1 10.36L8.39 11.07C8 11.46 8 12.09 8.39 12.5Z" />

    </Icon>
  );
};
ShakerIcon.displayName = 'ShakerIcon';
  