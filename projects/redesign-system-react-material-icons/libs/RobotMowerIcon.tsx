import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const RobotMowerIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `RobotMowerIcon ${className}`;
  return (
    <Icon alt="RobotMower" className={classNames} {...propsRest}>
      <path d="M1 14V5H13C18.5 5 23 9.5 23 15V17H20.83C20.42 18.17 19.31 19 18 19C16.69 19 15.58 18.17 15.17 17H10C9.09 18.21 7.64 19 6 19C3.24 19 1 16.76 1 14M6 11C4.34 11 3 12.34 3 14C3 15.66 4.34 17 6 17C7.66 17 9 15.66 9 14C9 12.34 7.66 11 6 11M15 10V12H20.25C19.92 11.27 19.5 10.6 19 10H15Z" />

    </Icon>
  );
};
RobotMowerIcon.displayName = 'RobotMowerIcon';
  