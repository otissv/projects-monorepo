import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FileWordOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FileWordOutlineIcon ${className}`;
  return (
    <Icon alt="FileWordOutline" className={classNames} {...propsRest}>
      <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M17.35 10L15.25 19H13.85L12.05 12.21L10.25 19H8.85L6.65 10H8.15L9.55 16.81L11.35 10H12.65L14.45 16.81L15.85 10H17.35Z" />

    </Icon>
  );
};
FileWordOutlineIcon.displayName = 'FileWordOutlineIcon';
  