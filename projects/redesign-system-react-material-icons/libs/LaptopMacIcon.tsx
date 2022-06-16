import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const LaptopMacIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `LaptopMacIcon ${className}`;
  return (
    <Icon alt="LaptopMac" className={classNames} {...propsRest}>
      <path d="M12,19A1,1 0 0,1 11,18A1,1 0 0,1 12,17A1,1 0 0,1 13,18A1,1 0 0,1 12,19M4,5H20V16H4M20,18A2,2 0 0,0 22,16V5C22,3.89 21.1,3 20,3H4C2.89,3 2,3.89 2,5V16A2,2 0 0,0 4,18H0A2,2 0 0,0 2,20H22A2,2 0 0,0 24,18H20Z" />

    </Icon>
  );
};
LaptopMacIcon.displayName = 'LaptopMacIcon';
  