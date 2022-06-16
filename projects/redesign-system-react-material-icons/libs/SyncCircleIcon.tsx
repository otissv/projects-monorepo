import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SyncCircleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SyncCircleIcon ${className}`;
  return (
    <Icon alt="SyncCircle" className={classNames} {...propsRest}>
      <path d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12M15.6 13.72A4 4 0 0 0 16 12A4 4 0 0 0 12 8V10L8.88 7L12 4V6A6 6 0 0 1 18 12A5.9 5.9 0 0 1 17.07 15.19M6 12A5.9 5.9 0 0 1 6.93 8.81L8.4 10.28A4 4 0 0 0 8 12A4 4 0 0 0 12 16V14L15 17L12 20V18A6 6 0 0 1 6 12Z" />

    </Icon>
  );
};
SyncCircleIcon.displayName = 'SyncCircleIcon';
  