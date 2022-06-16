import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const FormatListCheckboxIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `FormatListCheckboxIcon ${className}`;
  return (
    <Icon alt="FormatListCheckbox" className={classNames} {...propsRest}>
      <path d="M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z" />

    </Icon>
  );
};
FormatListCheckboxIcon.displayName = 'FormatListCheckboxIcon';
  