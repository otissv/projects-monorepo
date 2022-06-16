import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MenuDownIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MenuDownIcon ${className}`;
  return (
    <Icon alt="MenuDown" className={classNames} {...propsRest}>
      <path d="M7,10L12,15L17,10H7Z" />

    </Icon>
  );
};
MenuDownIcon.displayName = 'MenuDownIcon';
  