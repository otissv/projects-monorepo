import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BellRingIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BellRingIcon ${className}`;
  return (
    <Icon alt="BellRing" className={classNames} {...propsRest}>
      <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z" />

    </Icon>
  );
};
BellRingIcon.displayName = 'BellRingIcon';
  