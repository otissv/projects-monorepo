import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const PageLayoutSidebarLeftIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `PageLayoutSidebarLeftIcon ${className}`;
  return (
    <Icon alt="PageLayoutSidebarLeft" className={classNames} {...propsRest}>
      <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,8V16H10V8H6Z" />

    </Icon>
  );
};
PageLayoutSidebarLeftIcon.displayName = 'PageLayoutSidebarLeftIcon';
  