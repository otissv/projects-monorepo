import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const BankTransferInIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `BankTransferInIcon ${className}`;
  return (
    <Icon alt="BankTransferIn" className={classNames} {...propsRest}>
      <path d="M2,15V12H5V10L9,13.5L5,17V15H2M22,8.7V10H10V8.7L16,5L22,8.7M10,17H22V19H10V17M15,11H17V16H15V11M11,11H13V16H11V11M19,11H21V16H19V11Z" />

    </Icon>
  );
};
BankTransferInIcon.displayName = 'BankTransferInIcon';
  