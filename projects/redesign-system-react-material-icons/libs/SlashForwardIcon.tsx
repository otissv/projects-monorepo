import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SlashForwardIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SlashForwardIcon ${className}`;
  return (
    <Icon alt="SlashForward" className={classNames} {...propsRest}>
      <path d="M7 21L14.9 3H17L9.1 21H7Z" />

    </Icon>
  );
};
SlashForwardIcon.displayName = 'SlashForwardIcon';
  