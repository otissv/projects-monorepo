import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TacoIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TacoIcon ${className}`;
  return (
    <Icon alt="Taco" className={classNames} {...propsRest}>
      <path d="M19,18H5A4,4 0 0,1 1,14A8,8 0 0,1 9,6C10.06,6 11.07,6.21 12,6.58C12.93,6.21 13.94,6 15,6A8,8 0 0,1 23,14A4,4 0 0,1 19,18M3,14A2,2 0 0,0 5,16A2,2 0 0,0 7,14C7,11.63 8.03,9.5 9.67,8.04L9,8A6,6 0 0,0 3,14M19,16A2,2 0 0,0 21,14A6,6 0 0,0 15,8A6,6 0 0,0 9,14C9,14.73 8.81,15.41 8.46,16H19Z" />

    </Icon>
  );
};
TacoIcon.displayName = 'TacoIcon';
  