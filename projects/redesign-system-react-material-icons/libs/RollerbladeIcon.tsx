import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RollerbladeIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RollerbladeIcon ${className}`;
  return (
    <Icon alt="Rollerblade" className={classNames} {...propsRest}>
      <path d="M19,15C19,15 19,16 17,16C15,16 4,16 4,16V3H11L11.21,4.5H9.24V6H11.43L11.64,7.5H9.24V9H11.86L12,10H14C14,10 19,10 19,15M5.5,17A2.5,2.5 0 0,0 3,19.5A2.5,2.5 0 0,0 5.5,22A2.5,2.5 0 0,0 8,19.5A2.5,2.5 0 0,0 5.5,17M17.5,17A2.5,2.5 0 0,0 15,19.5A2.5,2.5 0 0,0 17.5,22A2.5,2.5 0 0,0 20,19.5A2.5,2.5 0 0,0 17.5,17M11.5,17A2.5,2.5 0 0,0 9,19.5A2.5,2.5 0 0,0 11.5,22A2.5,2.5 0 0,0 14,19.5A2.5,2.5 0 0,0 11.5,17Z" />

    </Icon>
  );
};
RollerbladeIcon.displayName = 'RollerbladeIcon';
  