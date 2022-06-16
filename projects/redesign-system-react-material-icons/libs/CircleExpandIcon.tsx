import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CircleExpandIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CircleExpandIcon ${className}`;
  return (
    <Icon alt="CircleExpand" className={classNames} {...propsRest}>
      <path d="M16,4L20,8V4M20,16L16,20H20M8,20L4,16V20M4,8L8,4H4M16.95,7.05C14.22,4.32 9.78,4.32 7.05,7.05C4.32,9.78 4.32,14.22 7.05,16.95C9.78,19.68 14.22,19.68 16.95,16.95C19.68,14.22 19.68,9.79 16.95,7.05M15.85,15.85C13.72,18 10.28,18 8.15,15.85C6,13.72 6,10.28 8.15,8.15C10.28,6 13.72,6 15.85,8.15C18,10.28 18,13.72 15.85,15.85Z" />

    </Icon>
  );
};
CircleExpandIcon.displayName = 'CircleExpandIcon';
  