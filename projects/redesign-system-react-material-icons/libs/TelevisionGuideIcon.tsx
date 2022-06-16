import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TelevisionGuideIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TelevisionGuideIcon ${className}`;
  return (
    <Icon alt="TelevisionGuide" className={classNames} {...propsRest}>
      <path d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z" />

    </Icon>
  );
};
TelevisionGuideIcon.displayName = 'TelevisionGuideIcon';
  