import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const TimerSandEmptyIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `TimerSandEmptyIcon ${className}`;
  return (
    <Icon alt="TimerSandEmpty" className={classNames} {...propsRest}>
      <path d="M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6M16,16.5V20H8V16.5L12,12.5L16,16.5M12,11.5L8,7.5V4H16V7.5L12,11.5Z" />

    </Icon>
  );
};
TimerSandEmptyIcon.displayName = 'TimerSandEmptyIcon';
  