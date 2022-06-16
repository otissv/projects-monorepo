import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const OfficeBuildingIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `OfficeBuildingIcon ${className}`;
  return (
    <Icon alt="OfficeBuilding" className={classNames} {...propsRest}>
      <path d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" />

    </Icon>
  );
};
OfficeBuildingIcon.displayName = 'OfficeBuildingIcon';
  