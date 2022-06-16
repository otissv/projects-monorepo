import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const CashUsdOutlineIcon: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  `CashUsdOutlineIcon ${className}`;
  return (
    <Icon alt="CashUsdOutline" className={classNames} {...propsRest}>
      <path d="M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M11,17H13V16H14A1,1 0 0,0 15,15V12A1,1 0 0,0 14,11H11V10H15V8H13V7H11V8H10A1,1 0 0,0 9,9V12A1,1 0 0,0 10,13H13V14H9V16H11V17Z" />

    </Icon>
  );
};
CashUsdOutlineIcon.displayName = 'CashUsdOutlineIcon';
  