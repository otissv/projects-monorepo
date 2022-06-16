import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MenuSwapIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MenuSwapIcon ${className}`;
  return (
    <Icon alt="MenuSwap" className={classNames} {...propsRest}>
      <path d="M12,6L7,11H17L12,6M7,13L12,18L17,13H7Z" />

    </Icon>
  );
};
MenuSwapIcon.displayName = 'MenuSwapIcon';
  