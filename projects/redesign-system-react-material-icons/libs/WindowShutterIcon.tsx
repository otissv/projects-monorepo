import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const WindowShutterIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `WindowShutterIcon ${className}`;
  return (
    <Icon alt="WindowShutter" className={classNames} {...propsRest}>
      <path d="M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18Z" />

    </Icon>
  );
};
WindowShutterIcon.displayName = 'WindowShutterIcon';
  