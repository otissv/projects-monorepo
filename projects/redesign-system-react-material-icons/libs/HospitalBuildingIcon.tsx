import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const HospitalBuildingIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `HospitalBuildingIcon ${className}`;
  return (
    <Icon alt="HospitalBuilding" className={classNames} {...propsRest}>
      <path d="M2,22V7A1,1 0 0,1 3,6H7V2H17V6H21A1,1 0 0,1 22,7V22H14V17H10V22H2M9,4V10H11V8H13V10H15V4H13V6H11V4H9M4,20H8V17H4V20M4,15H8V12H4V15M16,20H20V17H16V20M16,15H20V12H16V15M10,15H14V12H10V15Z" />

    </Icon>
  );
};
HospitalBuildingIcon.displayName = 'HospitalBuildingIcon';
  