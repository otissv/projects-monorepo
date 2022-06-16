import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PlaylistMinusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PlaylistMinusIcon ${className}`;
  return (
    <Icon alt="PlaylistMinus" className={classNames} {...propsRest}>
      <path d="M2,16H10V14H2M12,14V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z" />

    </Icon>
  );
};
PlaylistMinusIcon.displayName = 'PlaylistMinusIcon';
  