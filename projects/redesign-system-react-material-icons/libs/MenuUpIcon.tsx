import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MenuUpIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MenuUpIcon ${className}`;
  return (
    <Icon alt="MenuUp" className={classNames} {...propsRest}>
      <path d="M7,15L12,10L17,15H7Z" />

    </Icon>
  );
};
MenuUpIcon.displayName = 'MenuUpIcon';
  