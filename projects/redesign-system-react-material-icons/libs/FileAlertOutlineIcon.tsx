import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FileAlertOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FileAlertOutlineIcon ${className}`;
  return (
    <Icon alt="FileAlertOutline" className={classNames} {...propsRest}>
      <path d="M10,18H8V16H10V18M10,14H8V9H10V14M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />

    </Icon>
  );
};
FileAlertOutlineIcon.displayName = 'FileAlertOutlineIcon';
  