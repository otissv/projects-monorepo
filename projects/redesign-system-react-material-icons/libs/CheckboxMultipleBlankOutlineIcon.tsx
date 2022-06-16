import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CheckboxMultipleBlankOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CheckboxMultipleBlankOutlineIcon ${className}`;
  return (
    <Icon alt="CheckboxMultipleBlankOutline" className={classNames} {...propsRest}>
      <path d="M20,16V4H8V16H20M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z" />

    </Icon>
  );
};
CheckboxMultipleBlankOutlineIcon.displayName = 'CheckboxMultipleBlankOutlineIcon';
  