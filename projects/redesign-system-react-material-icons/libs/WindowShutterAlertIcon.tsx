import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const WindowShutterAlertIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `WindowShutterAlertIcon ${className}`;
  return (
    <Icon alt="WindowShutterAlert" className={classNames} {...propsRest}>
      <path d="M2 4H20V8H18V20H16V8H6V20H4V8H2V4M7 9H15V11H7V9M7 12H15V14H7V12M20 19V17H22V19H20M20 15V10H22V15H20Z" />

    </Icon>
  );
};
WindowShutterAlertIcon.displayName = 'WindowShutterAlertIcon';
  