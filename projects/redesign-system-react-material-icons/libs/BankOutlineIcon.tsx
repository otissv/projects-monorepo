import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BankOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BankOutlineIcon ${className}`;
  return (
    <Icon alt="BankOutline" className={classNames} {...propsRest}>
      <path d="M6.5,10H4.5V17H6.5V10M12.5,10H10.5V17H12.5V10M21,19H2V21H21V19M18.5,10H16.5V17H18.5V10M11.5,3.26L16.71,6H6.29L11.5,3.26M11.5,1L2,6V8H21V6L11.5,1Z" />

    </Icon>
  );
};
BankOutlineIcon.displayName = 'BankOutlineIcon';
  