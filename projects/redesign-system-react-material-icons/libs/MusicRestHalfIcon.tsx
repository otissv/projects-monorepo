import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MusicRestHalfIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MusicRestHalfIcon ${className}`;
  return (
    <Icon alt="MusicRestHalf" className={classNames} {...propsRest}>
      <path d="M6 14H8V10H16V14H18V15H6V14Z" />

    </Icon>
  );
};
MusicRestHalfIcon.displayName = 'MusicRestHalfIcon';
  