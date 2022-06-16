import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const SwimIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `SwimIcon ${className}`;
  return (
    <Icon alt="Swim" className={classNames} {...propsRest}>
      <path d="M2,18C4.22,17 6.44,16 8.67,16C10.89,16 13.11,18 15.33,18C17.56,18 19.78,16 22,16V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V18M8.67,13C7.89,13 7.12,13.12 6.35,13.32L11.27,9.88L10.23,8.64C10.09,8.47 10,8.24 10,8C10,7.66 10.17,7.35 10.44,7.17L16.16,3.17L17.31,4.8L12.47,8.19L17.7,14.42C16.91,14.75 16.12,15 15.33,15C13.11,15 10.89,13 8.67,13M18,7A2,2 0 0,1 20,9A2,2 0 0,1 18,11A2,2 0 0,1 16,9A2,2 0 0,1 18,7Z" />

    </Icon>
  );
};
SwimIcon.displayName = 'SwimIcon';
  