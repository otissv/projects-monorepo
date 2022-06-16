import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CreditCardSettingsOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CreditCardSettingsOutlineIcon ${className}`;
  return (
    <Icon alt="CreditCardSettingsOutline" className={classNames} {...propsRest}>
      <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" />

    </Icon>
  );
};
CreditCardSettingsOutlineIcon.displayName = 'CreditCardSettingsOutlineIcon';
  