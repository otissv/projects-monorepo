import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EmailSendOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EmailSendOutlineIcon ${className}`;
  return (
    <Icon alt="EmailSendOutline" className={classNames} {...propsRest}>
      <path d="M13 17H17V14L22 18.5L17 23V20H13V17M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V14H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z" />

    </Icon>
  );
};
EmailSendOutlineIcon.displayName = 'EmailSendOutlineIcon';
  