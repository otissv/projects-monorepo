import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MapMarkerDownIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MapMarkerDownIcon ${className}`;
  return (
    <Icon alt="MapMarkerDown" className={classNames} {...propsRest}>
      <path d="M12 2A7 7 0 0 0 5 9C5 14.25 12 22 12 22S19 14.25 19 9A7 7 0 0 0 12 2M7.5 10H10V5H14V10H16.5L12 14.5Z" />

    </Icon>
  );
};
MapMarkerDownIcon.displayName = 'MapMarkerDownIcon';
  