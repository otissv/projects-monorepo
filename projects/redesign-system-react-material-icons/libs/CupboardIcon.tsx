import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CupboardIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CupboardIcon ${className}`;
  return (
    <Icon alt="Cupboard" className={classNames} {...propsRest}>
      <path d="M17 2H7C5.9 2 5 2.9 5 4V19C5 20.11 5.9 21 7 21V22H9V21H15V22H17V21C18.11 21 19 20.11 19 19V4C19 2.9 18.11 2 17 2M10 18H8V15H10V18M16 18H14V15H16V18M17 12H7V9H17V12M17 7H7V4H17V7Z" />

    </Icon>
  );
};
CupboardIcon.displayName = 'CupboardIcon';
  