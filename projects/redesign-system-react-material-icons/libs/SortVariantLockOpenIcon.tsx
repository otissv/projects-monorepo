import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SortVariantLockOpenIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SortVariantLockOpenIcon ${className}`;
  return (
    <Icon alt="SortVariantLockOpen" className={classNames} {...propsRest}>
      <path d="M3,13V11H15V13H3M3,6H21V8H3V6M3,18V16H9V18H3M22,22H14V18H15V16A3,3 0 0,1 18,13A3,3 0 0,1 21,16H19A1,1 0 0,0 18,15A1,1 0 0,0 17,16V18H22V22Z" />

    </Icon>
  );
};
SortVariantLockOpenIcon.displayName = 'SortVariantLockOpenIcon';
  