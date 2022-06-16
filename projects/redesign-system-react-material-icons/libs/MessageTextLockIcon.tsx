import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const MessageTextLockIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `MessageTextLockIcon ${className}`;
  return (
    <Icon alt="MessageTextLock" className={classNames} {...propsRest}>
      <path d="M20.5 0A2.5 2.5 0 0 0 18 2.5V3A1 1 0 0 0 17 4V8A1 1 0 0 0 18 9H23A1 1 0 0 0 24 8V4A1 1 0 0 0 23 3V2.5A2.5 2.5 0 0 0 20.5 0M20.5 1A1.5 1.5 0 0 1 22 2.5V3H19V2.5A1.5 1.5 0 0 1 20.5 1M4 2A2 2 0 0 0 2 4V22L6 18H20A2 2 0 0 0 22 16V11H17C15.89 11 15 10.11 15 9V2H4M6 6H13V8H6V6M6 9H13V11H6V9M6 12H14V14H6V12Z" />

    </Icon>
  );
};
MessageTextLockIcon.displayName = 'MessageTextLockIcon';
  