import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FlipToBackIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FlipToBackIcon ${className}`;
  return (
    <Icon alt="FlipToBack" className={classNames} {...propsRest}>
      <path d="M15,17H17V15H15M15,5H17V3H15M5,7H3V19A2,2 0 0,0 5,21H17V19H5M19,17A2,2 0 0,0 21,15H19M19,9H21V7H19M19,13H21V11H19M9,17V15H7A2,2 0 0,0 9,17M13,3H11V5H13M19,3V5H21C21,3.89 20.1,3 19,3M13,15H11V17H13M9,3C7.89,3 7,3.89 7,5H9M9,11H7V13H9M9,7H7V9H9V7Z" />

    </Icon>
  );
};
FlipToBackIcon.displayName = 'FlipToBackIcon';
  