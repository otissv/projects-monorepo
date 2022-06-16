import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HospitalMarkerIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HospitalMarkerIcon ${className}`;
  return (
    <Icon alt="HospitalMarker" className={classNames} {...propsRest}>
      <path d="M12,2C15.86,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M9,6V12H11V10H13V12H15V6H13V8H11V6H9Z" />

    </Icon>
  );
};
HospitalMarkerIcon.displayName = 'HospitalMarkerIcon';
  