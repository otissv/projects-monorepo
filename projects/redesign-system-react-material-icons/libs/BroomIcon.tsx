import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BroomIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BroomIcon ${className}`;
  return (
    <Icon alt="Broom" className={classNames} {...propsRest}>
      <path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />

    </Icon>
  );
};
BroomIcon.displayName = 'BroomIcon';
  