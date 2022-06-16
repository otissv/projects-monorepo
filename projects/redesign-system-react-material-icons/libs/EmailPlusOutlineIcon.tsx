import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const EmailPlusOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `EmailPlusOutlineIcon ${className}`;
  return (
    <Icon alt="EmailPlusOutline" className={classNames} {...propsRest}>
      <path d="M19 15V18H16V20H19V23H21V20H24V18H21V15H19M14 18H3V8L11 13L19 8V13H21V6C21 4.9 20.1 4 19 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H14V18M19 6L11 11L3 6H19Z" />

    </Icon>
  );
};
EmailPlusOutlineIcon.displayName = 'EmailPlusOutlineIcon';
  