import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CheckerboardPlusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CheckerboardPlusIcon ${className}`;
  return (
    <Icon alt="CheckerboardPlus" className={classNames} {...propsRest}>
      <path d="M19 17H22V19H19V22H17V19H14V17H17V14H19V17M8 16H12V12H8V16M12 12H16V8H12V12M2 2V22H13.54C13 21.42 12.63 20.74 12.36 20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12.36C20.74 12.63 21.42 13 22 13.54V2H2Z" />

    </Icon>
  );
};
CheckerboardPlusIcon.displayName = 'CheckerboardPlusIcon';
  