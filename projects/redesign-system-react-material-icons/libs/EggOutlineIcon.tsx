import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EggOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EggOutlineIcon ${className}`;
  return (
    <Icon alt="EggOutline" className={classNames} {...propsRest}>
      <path d="M12 4C14.32 4 17.5 10.7 17.5 14.5C17.5 17.53 15.03 20 12 20S6.5 17.53 6.5 14.5C6.5 10.7 9.68 4 12 4M12 2C7.86 2 4.5 10.36 4.5 14.5C4.5 18.64 7.86 22 12 22S19.5 18.64 19.5 14.5C19.5 10.36 16.14 2 12 2Z" />

    </Icon>
  );
};
EggOutlineIcon.displayName = 'EggOutlineIcon';
  