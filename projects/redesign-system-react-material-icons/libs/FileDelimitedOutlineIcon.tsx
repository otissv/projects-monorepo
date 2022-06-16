import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FileDelimitedOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FileDelimitedOutlineIcon ${className}`;
  return (
    <Icon alt="FileDelimitedOutline" className={classNames} {...propsRest}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M10 19L12 15H9V10H15V15L13 19H10" />

    </Icon>
  );
};
FileDelimitedOutlineIcon.displayName = 'FileDelimitedOutlineIcon';
  