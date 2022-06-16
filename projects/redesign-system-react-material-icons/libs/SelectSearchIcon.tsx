import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SelectSearchIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SelectSearchIcon ${className}`;
  return (
    <Icon alt="SelectSearch" className={classNames} {...propsRest}>
      <path d="M19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12S11 14 11 16.5 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9M15.5 19C14.12 19 13 17.88 13 16.5S14.12 14 15.5 14 18 15.12 18 16.5 16.88 19 15.5 19M21 9H19V7H21V9M21 5H19V3H20C20.55 3 21 3.45 21 4V5M19 11.03V11H21V13H20.97C20.46 12.21 19.79 11.54 19 11.03M17 5H15V3H17V5M13 5H11V3H13V5M3 7H5V9H3V7M7 19H9V21H7V19M3 11H5V13H3V11M4 3H5V5H3V4C3 3.45 3.45 3 4 3M9 5H7V3H9V5M3 19H5V21H4C3.45 21 3 20.55 3 20V19M3 15H5V17H3V15Z" />

    </Icon>
  );
};
SelectSearchIcon.displayName = 'SelectSearchIcon';
  