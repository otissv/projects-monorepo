import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ArmFlexIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ArmFlexIcon ${className}`;
  return (
    <Icon alt="ArmFlex" className={classNames} {...propsRest}>
      <path d="M3 18.34C3 18.34 4 7.09 7 3L12 4L11 7.09H9V14.25H10C12 11.18 16.14 10.06 18.64 11.18C21.94 12.71 21.64 17.32 18.64 19.36C16.24 21 9 22.43 3 18.34Z" />

    </Icon>
  );
};
ArmFlexIcon.displayName = 'ArmFlexIcon';
  