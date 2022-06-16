import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const WindowMinimizeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `WindowMinimizeIcon ${className}`;
  return (
    <Icon alt="WindowMinimize" className={classNames} {...propsRest}>
      <path d="M20,14H4V10H20" />

    </Icon>
  );
};
WindowMinimizeIcon.displayName = 'WindowMinimizeIcon';
  