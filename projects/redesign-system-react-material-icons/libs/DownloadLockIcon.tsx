import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const DownloadLockIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `DownloadLockIcon ${className}`;
  return (
    <Icon alt="DownloadLock" className={classNames} {...propsRest}>
      <path d="M5 20H14V18H5M19 9H15V3H9V9H5L12 16M22 16A1.08 1.08 0 0 1 23 17V21A1.08 1.08 0 0 1 22 22H17A1.08 1.08 0 0 1 16 21V17A1.08 1.08 0 0 1 17 16V14.5A2.5 2.5 0 0 1 22 14.5V16M21 16V14.5A1.5 1.5 0 0 0 18 14.5V16H21" />

    </Icon>
  );
};
DownloadLockIcon.displayName = 'DownloadLockIcon';
  