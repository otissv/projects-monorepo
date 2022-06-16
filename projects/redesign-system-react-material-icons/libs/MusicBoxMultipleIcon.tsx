import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MusicBoxMultipleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MusicBoxMultipleIcon ${className}`;
  return (
    <Icon alt="MusicBoxMultiple" className={classNames} {...propsRest}>
      <path d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4M18,7H15V12.5A2.5,2.5 0 0,1 12.5,15A2.5,2.5 0 0,1 10,12.5A2.5,2.5 0 0,1 12.5,10C13.07,10 13.58,10.19 14,10.5V5H18M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2Z" />

    </Icon>
  );
};
MusicBoxMultipleIcon.displayName = 'MusicBoxMultipleIcon';
  