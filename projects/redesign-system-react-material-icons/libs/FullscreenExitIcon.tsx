import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FullscreenExitIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FullscreenExitIcon ${className}`;
  return (
    <Icon alt="FullscreenExit" className={classNames} {...propsRest}>
      <path d="M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z" />

    </Icon>
  );
};
FullscreenExitIcon.displayName = 'FullscreenExitIcon';
  