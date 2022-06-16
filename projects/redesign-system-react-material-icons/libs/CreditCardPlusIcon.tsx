import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CreditCardPlusIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CreditCardPlusIcon ${className}`;
  return (
    <Icon alt="CreditCardPlus" className={classNames} {...propsRest}>
      <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H13.09A5.47 5.47 0 0 1 13 19A6 6 0 0 1 19 13A5.88 5.88 0 0 1 22 13.81V6A2 2 0 0 0 20 4M20 11H4V8H20M20 15V18H23V20H20V23H18V20H15V18H18V15Z" />

    </Icon>
  );
};
CreditCardPlusIcon.displayName = 'CreditCardPlusIcon';
  