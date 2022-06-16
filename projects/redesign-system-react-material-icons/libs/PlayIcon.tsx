import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PlayIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PlayIcon ${className}`;
  return (
    <Icon alt="Play" className={classNames} {...propsRest}>
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />

    </Icon>
  );
};
PlayIcon.displayName = 'PlayIcon';
  