import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CalendarExportIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CalendarExportIcon ${className}`;
  return (
    <Icon alt="CalendarExport" className={classNames} {...propsRest}>
      <path d="M12,22L16,18H13V12H11V18H8M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H8V20H5V9H19V20H16V22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4Z" />

    </Icon>
  );
};
CalendarExportIcon.displayName = 'CalendarExportIcon';
  