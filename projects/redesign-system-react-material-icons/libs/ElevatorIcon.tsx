import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ElevatorIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ElevatorIcon ${className}`;
  return (
    <Icon alt="Elevator" className={classNames} {...propsRest}>
      <path d="M7,2L11,6H8V10H6V6H3L7,2M17,10L13,6H16V2H18V6H21L17,10M7,12H17A2,2 0 0,1 19,14V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V14A2,2 0 0,1 7,12M7,14V20H17V14H7Z" />

    </Icon>
  );
};
ElevatorIcon.displayName = 'ElevatorIcon';
  