import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const LightningBoltIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `LightningBoltIcon ${className}`;
  return (
    <Icon alt="LightningBolt" className={classNames} {...propsRest}>
      <path d="M11 15H6L13 1V9H18L11 23V15Z" />

    </Icon>
  );
};
LightningBoltIcon.displayName = 'LightningBoltIcon';
  