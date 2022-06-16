import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const WindowMaximizeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `WindowMaximizeIcon ${className}`;
  return (
    <Icon alt="WindowMaximize" className={classNames} {...propsRest}>
      <path d="M4,4H20V20H4V4M6,8V18H18V8H6Z" />

    </Icon>
  );
};
WindowMaximizeIcon.displayName = 'WindowMaximizeIcon';
  