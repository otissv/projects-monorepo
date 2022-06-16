import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ShareOffIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `ShareOffIcon ${className}`;
  return (
    <Icon alt="ShareOff" className={classNames} {...propsRest}>
      <path d="M20.8 22.7L15.6 17.5L14 19V15.9L13.1 14.9C8.6 15.2 5.4 16.8 3 20.1C3.58 16.31 5.72 12.94 8.9 10.8L1.1 3L2.4 1.7L22.1 21.5M18.1 14.9L21 12L14 5V9L12.5 9.3" />

    </Icon>
  );
};
ShareOffIcon.displayName = 'ShareOffIcon';
  