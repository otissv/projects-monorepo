import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const KeyPlusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `KeyPlusIcon ${className}`;
  return (
    <Icon alt="KeyPlus" className={classNames} {...propsRest}>
      <path d="M6.5,3C8.46,3 10.13,4.25 10.74,6H22V9H18V12H15V9H10.74C10.13,10.75 8.46,12 6.5,12C4,12 2,10 2,7.5C2,5 4,3 6.5,3M6.5,6A1.5,1.5 0 0,0 5,7.5A1.5,1.5 0 0,0 6.5,9A1.5,1.5 0 0,0 8,7.5A1.5,1.5 0 0,0 6.5,6M8,17H11V14H13V17H16V19H13V22H11V19H8V17Z" />

    </Icon>
  );
};
KeyPlusIcon.displayName = 'KeyPlusIcon';
  