import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TableLargePlusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TableLargePlusIcon ${className}`;
  return (
    <Icon alt="TableLargePlus" className={classNames} {...propsRest}>
      <path d="M12.35 20H10V17H12.09C12.21 16.28 12.46 15.61 12.81 15H10V12H14V13.54C14.58 13 15.25 12.61 16 12.35V12H20V12.35C20.75 12.61 21.42 13 22 13.54V5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V20C2 21.1 2.9 22 4 22H13.54C13 21.42 12.61 20.75 12.35 20M16 7H20V10H16V7M10 7H14V10H10V7M8 20H4V17H8V20M8 15H4V12H8V15M8 10H4V7H8V10M17 14H19V17H22V19H19V22H17V19H14V17H17V14" />

    </Icon>
  );
};
TableLargePlusIcon.displayName = 'TableLargePlusIcon';
  