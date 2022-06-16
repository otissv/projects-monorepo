import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TextBoxMultipleIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TextBoxMultipleIcon ${className}`;
  return (
    <Icon alt="TextBoxMultiple" className={classNames} {...propsRest}>
      <path d="M16,15H9V13H16M19,11H9V9H19M19,7H9V5H19M21,1H7C5.89,1 5,1.89 5,3V17C5,18.11 5.9,19 7,19H21C22.11,19 23,18.11 23,17V3C23,1.89 22.1,1 21,1M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3Z" />

    </Icon>
  );
};
TextBoxMultipleIcon.displayName = 'TextBoxMultipleIcon';
  