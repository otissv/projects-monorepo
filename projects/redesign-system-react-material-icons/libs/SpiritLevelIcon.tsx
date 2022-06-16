import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SpiritLevelIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SpiritLevelIcon ${className}`;
  return (
    <Icon alt="SpiritLevel" className={classNames} {...propsRest}>
      <path d="M22 8H2V16H22V8M18 14V10H20V14H18M11 12H13C14.1 12 15 11.11 15 10H17V14H7V10H9C9 11.11 9.9 12 11 12M4 14V10H6V14H4Z" />

    </Icon>
  );
};
SpiritLevelIcon.displayName = 'SpiritLevelIcon';
  