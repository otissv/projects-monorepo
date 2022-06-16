import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CellphoneDockIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CellphoneDockIcon ${className}`;
  return (
    <Icon alt="CellphoneDock" className={classNames} {...propsRest}>
      <path d="M16,15H8V5H16M16,1H8C6.89,1 6,1.89 6,3V17A2,2 0 0,0 8,19H16A2,2 0 0,0 18,17V3C18,1.89 17.1,1 16,1M8,23H16V21H8V23Z" />

    </Icon>
  );
};
CellphoneDockIcon.displayName = 'CellphoneDockIcon';
  