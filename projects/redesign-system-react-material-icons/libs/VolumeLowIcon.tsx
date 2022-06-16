import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const VolumeLowIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `VolumeLowIcon ${className}`;
  return (
    <Icon alt="VolumeLow" className={classNames} {...propsRest}>
      <path d="M7,9V15H11L16,20V4L11,9H7Z" />

    </Icon>
  );
};
VolumeLowIcon.displayName = 'VolumeLowIcon';
  