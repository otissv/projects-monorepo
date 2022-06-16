import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MusicBoxOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MusicBoxOutlineIcon ${className}`;
  return (
    <Icon alt="MusicBoxOutline" className={classNames} {...propsRest}>
      <path d="M16,9H13V14.5A2.5,2.5 0 0,1 10.5,17A2.5,2.5 0 0,1 8,14.5A2.5,2.5 0 0,1 10.5,12C11.07,12 11.58,12.19 12,12.5V7H16V9M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M5,5V19H19V5H5Z" />

    </Icon>
  );
};
MusicBoxOutlineIcon.displayName = 'MusicBoxOutlineIcon';
  