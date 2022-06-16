import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RemoteDesktopIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RemoteDesktopIcon ${className}`;
  return (
    <Icon alt="RemoteDesktop" className={classNames} {...propsRest}>
      <path d="M3,2A2,2 0 0,0 1,4V16C1,17.11 1.9,18 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4A2,2 0 0,0 21,2M3,4H21V16H3M15,5L11.5,8.5L15,12L16.4,10.6L14.3,8.5L16.4,6.4M9,8L7.6,9.4L9.7,11.5L7.6,13.6L9,15L12.5,11.5" />

    </Icon>
  );
};
RemoteDesktopIcon.displayName = 'RemoteDesktopIcon';
  