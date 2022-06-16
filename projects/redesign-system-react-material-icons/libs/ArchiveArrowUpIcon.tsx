import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ArchiveArrowUpIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ArchiveArrowUpIcon ${className}`;
  return (
    <Icon alt="ArchiveArrowUp" className={classNames} {...propsRest}>
      <path d="M4 21H20V8H4M14 15V18H10V15H7L12 10L17 15M3 3H21V7H3" />

    </Icon>
  );
};
ArchiveArrowUpIcon.displayName = 'ArchiveArrowUpIcon';
  