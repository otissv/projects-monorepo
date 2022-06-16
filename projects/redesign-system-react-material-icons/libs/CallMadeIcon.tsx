import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CallMadeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CallMadeIcon ${className}`;
  return (
    <Icon alt="CallMade" className={classNames} {...propsRest}>
      <path d="M9,5V7H15.59L4,18.59L5.41,20L17,8.41V15H19V5" />

    </Icon>
  );
};
CallMadeIcon.displayName = 'CallMadeIcon';
  