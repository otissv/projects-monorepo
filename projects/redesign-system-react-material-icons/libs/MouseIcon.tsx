import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MouseIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MouseIcon ${className}`;
  return (
    <Icon alt="Mouse" className={classNames} {...propsRest}>
      <path d="M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15A8,8 0 0,0 12,23A8,8 0 0,0 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z" />

    </Icon>
  );
};
MouseIcon.displayName = 'MouseIcon';
  