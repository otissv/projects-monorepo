import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FileCodeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FileCodeIcon ${className}`;
  return (
    <Icon alt="FileCode" className={classNames} {...propsRest}>
      <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6.12,15.5L9.86,19.24L11.28,17.83L8.95,15.5L11.28,13.17L9.86,11.76L6.12,15.5M17.28,15.5L13.54,11.76L12.12,13.17L14.45,15.5L12.12,17.83L13.54,19.24L17.28,15.5Z" />

    </Icon>
  );
};
FileCodeIcon.displayName = 'FileCodeIcon';
  