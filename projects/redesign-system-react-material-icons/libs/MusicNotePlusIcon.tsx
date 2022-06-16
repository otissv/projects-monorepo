import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MusicNotePlusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MusicNotePlusIcon ${className}`;
  return (
    <Icon alt="MusicNotePlus" className={classNames} {...propsRest}>
      <path d="M17 9V12H14V14H17V17H19V14H22V12H19V9H17M9 3V13.55C8.41 13.21 7.73 13 7 13C4.79 13 3 14.79 3 17S4.79 21 7 21 11 19.21 11 17V7H15V3H9Z" />

    </Icon>
  );
};
MusicNotePlusIcon.displayName = 'MusicNotePlusIcon';
  