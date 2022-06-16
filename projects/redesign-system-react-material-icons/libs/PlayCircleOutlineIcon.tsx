import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PlayCircleOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PlayCircleOutlineIcon ${className}`;
  return (
    <Icon alt="PlayCircleOutline" className={classNames} {...propsRest}>
      <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />

    </Icon>
  );
};
PlayCircleOutlineIcon.displayName = 'PlayCircleOutlineIcon';
  