import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FuseIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FuseIcon ${className}`;
  return (
    <Icon alt="Fuse" className={classNames} {...propsRest}>
      <path d="M8,7V17H15V7H8M11.16,16V12.87H9.41L11.91,8V11.14H13.59L11.16,16M16,2V6H7V2A1,1 0 0,1 8,1H15A1,1 0 0,1 16,2M16,18V22A1,1 0 0,1 15,23H8A1,1 0 0,1 7,22V18H16Z" />

    </Icon>
  );
};
FuseIcon.displayName = 'FuseIcon';
  