import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EmailLockIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EmailLockIcon ${className}`;
  return (
    <Icon alt="EmailLock" className={classNames} {...propsRest}>
      <path d="M20.5,0A2.5,2.5 0 0,1 23,2.5V3A1,1 0 0,1 24,4V8A1,1 0 0,1 23,9H18A1,1 0 0,1 17,8V4A1,1 0 0,1 18,3V2.5A2.5,2.5 0 0,1 20.5,0M12,11L4,6V8L12,13L16.18,10.39C16.69,10.77 17.32,11 18,11H22V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H15V8C15,8.36 15.06,8.7 15.18,9L12,11M20.5,1A1.5,1.5 0 0,0 19,2.5V3H22V2.5A1.5,1.5 0 0,0 20.5,1Z" />

    </Icon>
  );
};
EmailLockIcon.displayName = 'EmailLockIcon';
  