import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TeachIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TeachIcon ${className}`;
  return (
    <Icon alt="Teach" className={classNames} {...propsRest}>
      <path d="M20,17A2,2 0 0,0 22,15V4A2,2 0 0,0 20,2H9.46C9.81,2.61 10,3.3 10,4H20V15H11V17M15,7V9H9V22H7V16H5V22H3V14H1.5V9A2,2 0 0,1 3.5,7H15M8,4A2,2 0 0,1 6,6A2,2 0 0,1 4,4A2,2 0 0,1 6,2A2,2 0 0,1 8,4Z" />

    </Icon>
  );
};
TeachIcon.displayName = 'TeachIcon';
  